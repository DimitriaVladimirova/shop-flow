import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { PageHeader } from './PageHeader';

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'My orders' }];

describe('PageHeader', () => {
  it('shows the title as the main heading', () => {
    renderWithProviders(<PageHeader title="My orders"></PageHeader>);
    expect(screen.getByRole('heading', { level: 1, name: 'My orders' })).toBeInTheDocument();
  });

  it('links the earlier breadcrumb steps', () => {
    renderWithProviders(<PageHeader title="My orders" breadcrumbs={breadcrumbs} />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  it('marks the last step as the current page', () => {
    renderWithProviders(<PageHeader title="My orders" breadcrumbs={breadcrumbs} />);
    expect(screen.getByRole('listitem', { current: 'page' })).toHaveTextContent('My orders');
  });

  it('shows no breadcrumb navigation without breadcrumbs', () => {
    renderWithProviders(<PageHeader title="My orders" />);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});
