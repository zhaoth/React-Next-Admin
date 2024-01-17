'use client';
import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import Apis from '@/apis';

export type TableListItem = {
  name: string;
  email: number;
  phone: string;
  gender: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'name',
    width: 80,
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

// @ts-ignore
const getTableData = async (params, sort, filter): Promise<any> => {
  const res = await Apis.getTableList({
    results: 55,
    page: params.current,
    size: params.pageSize,
  });
  console.log(res);
  return ({
    success: true,
    total: res.info.results || 0,
    data: res.results || [],
  });
};

export default function ProTaleDemo() {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={getTableData}
      rowKey="phone"
      pagination={{
        pageSize: 10,
        showQuickJumper: true,
      }}
      search={{
        optionRender: false,
        collapsed: false,
      }}
      dateFormatter="string"
      headerTitle="表格标题"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
    />
  );
};
