'use client';
import { Table } from 'antd';
import React from 'react';
import { useAntdTable } from 'ahooks';
import Apis from '@/apis';

interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

const getTableData = async ({ current, pageSize }: {
  current: number, pageSize: number
}): Promise<Result> => {
  const res = await Apis.getTableList({
    results: 55,
    page: current,
    size: pageSize,
  });
  return ({
    total: res.info.results,
    list: res.results,
  });
};

export default function DemoTable() {
  const { tableProps } = useAntdTable(getTableData);

  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ];

  return <Table columns={columns} rowKey="email" {...tableProps} />;
};
