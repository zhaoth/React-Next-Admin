import Link from 'next/link';
import { staticRouter } from '@/static/staticRouter';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={`${staticRouter.root}`}>Return Home</Link>
    </div>
  );
}
