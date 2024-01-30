import { useTranslations } from 'next-intl';

export default function Navigation({ onNavCLick, name }: {
  onNavCLick?: () => void,
  name?: string
}) {
  const t = useTranslations('menu');
  return (
    <>
      <div onClick={onNavCLick}>{t(`${name}`)}</div>
    </>
  );
}
