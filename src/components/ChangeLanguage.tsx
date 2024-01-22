import React, { useState } from 'react';
import { Group } from 'antd/es/radio';
import { usePathname as useIntlPathname, useRouter as useIntlRouter } from '@/lib/language';
import useSettingStore from '@/store/useSettingStore';
import { RadioChangeEvent } from 'antd';

export default function ChangeLanguage() {
  const options = [
    { label: 'EN', value: 'en' },
    { label: '中', value: 'zh' },
  ];
  const intlPathname = useIntlPathname();
  const intlRouter = useIntlRouter();
  const setDefaultLocale = useSettingStore((state) => state.setDefaultLocale);
  const defaultLocale = useSettingStore((state) => state.defaultLocale);
  const [value, setValue] = useState(defaultLocale);

  const onLanguageChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
    setDefaultLocale(value);
    intlRouter.replace(intlPathname, { locale: value });
  };
  return (
    <>
      <Group options={options} onChange={onLanguageChange} value={value} key={value}>
      </Group>
    </>
  );
}
