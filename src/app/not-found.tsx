import Link from 'next/link';
import { staticRouter } from '@/static/staticRouter';
import { Result } from 'antd';

export default function NotFound() {
  return (
    <Result
      className="flex place-content-center h-screen"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link href={`${staticRouter.root}`}>Return Home</Link>}
    />
  );
}
