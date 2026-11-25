import { Outlet } from 'react-router';
import { Footer } from '../shared/layout/Footer';
import { Header } from '../shared/layout/Header';
import { ResetMockDataButton } from '../mocks/ResetMockDataButton';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-light-gray-1">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS === 'true' && <ResetMockDataButton />}
    </div>
  );
}
