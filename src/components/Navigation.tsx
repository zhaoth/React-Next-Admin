import { useTranslations } from 'next-intl';

export default function Navigation({ onNavCLick, item }: {
  onNavCLick: () => void,
  item: any
}) {
  const t = useTranslations('menu');
  return (
    <>
      <div onClick={onNavCLick}>{t(`${item.name}`)}</div>
    </>
  );
}
