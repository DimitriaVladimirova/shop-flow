import { Logo } from './Logo';

export function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav aria-label="Footer">
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
        </nav>
      </div>
      <div className="border-t border-light-gray-2 bg-light-gray-1">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-small text-second-text md:flex-row md:justify-between">
          <p>&copy; {year} ShopFlow. All rights reserved.</p>
          <p>UI kit by Raouf Belakhdar (CC BY 4.0)</p>
        </div>
      </div>
    </footer>
  );
}
