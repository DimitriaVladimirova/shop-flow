import { PageHeader } from '../../shared/layout/PageHeader';
import { CatalogPage } from './CatalogPage';

export function ShopPage() {
  return (
    <>
      <PageHeader title="Shop" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
      <CatalogPage />
    </>
  );
}
