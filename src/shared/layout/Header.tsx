import type { ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

type HeaderProps = {
  actions?: ReactNode;
};

export function Header({ actions }: HeaderProps) {
  return (
    <header>
      <div className="bg-secondary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-3 text-h6 font-bold md:justify-between">
          <div className="hidden items-center gap-6 md:flex">
            <a href="tel:+35921234567" className="inline-flex items-center gap-2 hover:underline">
              <Phone className="size-4" aria-hidden="true" />
              +359 2 123 4567
            </a>
            <a
              href="mailto:hello@shopflow.test"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail className="size-4" aria-hidden="true" />
              hello@shopflow.test
            </a>
          </div>
          <p>Free delivery on orders over €30</p>
        </div>
      </div>
      <nav aria-label="Main" className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-5 md:gap-8">
          <Logo />
          <ul className="flex items-center gap-6">
            <li>
              <a href="/" className="text-h6 font-bold text-second-text hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="text-h6 font-bold text-second-text hover:text-primary">
                Shop
              </a>
            </li>
          </ul>
          <div className="ml-auto flex items-center gap-4">{actions}</div>
        </div>
      </nav>
    </header>
  );
}
