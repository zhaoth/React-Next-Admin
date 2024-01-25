import Link from 'next/link';
import { staticRouter } from '@/static/staticRouter';
import { Result } from 'antd';

export default function WentWrong() {
  return (
    <Result
      className='flex place-content-center h-screen'
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={ <Link href={`${staticRouter.root}`}>Return Home</Link>}
    />
  );
}
