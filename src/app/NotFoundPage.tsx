import { Link } from 'react-router';
import { PageHeader } from '../shared/layout/PageHeader';
import { Card } from '../shared/ui/Card';
import { EmptyState } from '../shared/ui/EmptyState';
import { buttonClasses } from '../shared/ui/buttonClasses';

export function NotFoundPage() {
  return (
    <>
      <PageHeader
        title="Page not found"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Page not found' }]}
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Card>
          <EmptyState
            title="We can’t find that page"
            description="The link may be broken, or the page may have been moved. Let’s get you back to the shop."
            action={
              <Link to="/" className={buttonClasses()}>
                Back to home
              </Link>
            }
          />
        </Card>
      </div>
    </>
  );
}
