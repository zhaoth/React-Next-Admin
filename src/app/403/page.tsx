import Link from 'next/link';
import { staticRouter } from '@/static/staticRouter';
import { Result } from 'antd';

export default function NoAuthorized() {
  return (
    <Result
      className='flex place-content-center h-screen'
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={ <Link href={`${staticRouter.root}`}>Return Home</Link>}
    />
  );
}
