import { Link } from 'react-router';

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  breadcrumbs?: Breadcrumb[];
};

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-h3 font-bold">{title}</h1>
        {breadcrumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-h6 font-bold">
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={crumb.label}
                  aria-current={crumb.href ? undefined : 'page'}
                  className="flex items-center gap-2"
                >
                  {index > 0 && (
                    <span aria-hidden="true" className="text-muted">
                      ›
                    </span>
                  )}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
}
