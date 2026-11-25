import { DevUiPage } from './app/DevUiPage';
import { ResetMockDataButton } from './mocks/ResetMockDataButton';
import { Header } from './shared/layout/Header';
import { Footer } from './shared/layout/Footer';
import { PageHeader } from './shared/layout/PageHeader';
import { CatalogPage } from './features/catalog/CatalogPage';

function App() {
  if (import.meta.env.DEV && window.location.pathname === '/dev/ui') {
    return <DevUiPage />;
  }
  return (
    <>
      <Header />
      <PageHeader title="Shop" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
      <CatalogPage />
      <Footer />
      {import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS === 'true' && <ResetMockDataButton />}
    </>
  );
}

export default App;
