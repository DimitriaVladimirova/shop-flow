import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Table, TBody, Td, Th, THead, Tr } from './Table';

function renderOrdersTable() {
  renderWithProviders(
    <Table caption="My orders">
      <THead>
        <Tr>
          <Th>Order</Th>
          <Th>Status</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>#SF-10234</Td>
          <Td>Shipped</Td>
        </Tr>
        <Tr>
          <Td>#SF-10198</Td>
          <Td>Delivered</Td>
        </Tr>
      </TBody>
    </Table>,
  );
}

describe('Table', () => {
  it('has the caption as its accessible name', () => {
    renderOrdersTable();

    expect(screen.getByRole('table', { name: 'My orders' })).toBeInTheDocument();
  });

  it('shows the column headers', () => {
    renderOrdersTable();

    expect(screen.getByRole('columnheader', { name: 'Order' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Status' })).toBeInTheDocument();
  });

  it('has one header row and one row per order', () => {
    renderOrdersTable();

    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});
