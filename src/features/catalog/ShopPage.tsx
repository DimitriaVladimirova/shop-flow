import { useParams } from 'react-router';
import { PageHeader } from '../../shared/layout/PageHeader';
import { CatalogPage } from './CatalogPage';
import { useGroups } from './useGroups';
import { NotFoundPage } from '../../app/NotFoundPage';

export function ShopPage() {
  const { groupSlug } = useParams();
  const groups = useGroups();
  const group = groups.data?.find((g) => g.slug === groupSlug);

  if (groupSlug && groups.isSuccess && !group) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHeader
        title={group ? group?.name : 'Shop'}
        breadcrumbs={
          group
            ? [
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: group.name },
              ]
            : [{ label: 'Home', href: '/' }, { label: 'Shop' }]
        }
      />
      <CatalogPage groupSlug={groupSlug} />
    </>
  );
}
