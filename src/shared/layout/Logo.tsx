import { Link } from 'react-router';

export function Logo() {
  return (
    <Link
      to={'/'}
      className="inline-flex items-center gap-2 text-h4 font-bold text-dark hover:text-primary"
    >
      <span aria-hidden="true" className="size-6 rounded-full bg-primary" />
      ShopFlow
    </Link>
  );
}
