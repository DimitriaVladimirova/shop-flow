import { Button } from '../shared/ui/Button';
import { Input } from '../shared/ui/Input';
import { Radio } from '../shared/ui/Radio';
import { Checkbox } from '../shared/ui/Checkbox';
import { Select } from '../shared/ui/Select';
import { Badge } from '../shared/ui/Badge';
import { Card } from '../shared/ui/Card';
import { Skeleton } from '../shared/ui/Skeleton';
import { Spinner } from '../shared/ui/Spinner';
import { EmptyState } from '../shared/ui/EmptyState';
import { Switch } from '../shared/ui/Switch';
import { Modal } from '../shared/ui/Modal';
import { useState } from 'react';
import { Toast } from '../shared/ui/Toast';
import { Table, TBody, THead, Tr, Th, Td } from '../shared/ui/Table';
import { Header } from '../shared/layout/Header';
import { PageHeader } from '../shared/layout/PageHeader';
import { Footer } from '../shared/layout/Footer';
import { ProductCard } from '../features/catalog/ProductCard';
import { seedProducts } from '../mocks/seed';

export function DevUiPage() {
  const colours = [
    { name: 'primary', className: 'bg-primary' },
    { name: 'primary-hover', className: 'bg-primary-hover' },
    { name: 'primary-faded', className: 'bg-primary-faded' },
    { name: 'secondary', className: 'bg-secondary' },
    { name: 'dark', className: 'bg-dark' },
    { name: 'second-text', className: 'bg-second-text' },
    { name: 'muted', className: 'bg-muted' },
    { name: 'success', className: 'bg-success' },
    { name: 'success-faded', className: 'bg-success-faded' },
    { name: 'alert', className: 'bg-alert' },
    { name: 'alert-faded', className: 'bg-alert-faded' },
    { name: 'danger', className: 'bg-danger' },
    { name: 'disabled', className: 'bg-disabled' },
    { name: 'light-gray-1', className: 'bg-light-gray-1' },
    { name: 'light-gray-2', className: 'bg-light-gray-2' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <main className="min-h-screen bg-light-gray-1 p-8">
      <h1 className="text-h3 font-bold text-dark">UI components</h1>
      <p className="mt-2 text-paragraph text-second-text">
        Every shared component in all its variants. Development only.
      </p>
      <section className="mt-8">
        <h2 className="text-h5 font-bold text-dark">Colours</h2>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {colours.map((colour) => (
            <div key={colour.name} className="flex items-center gap-2">
              <div
                className={`size-10 rounded-md border border-light-gray-2 ${colour.className}`}
              />
              <span className="text-small text-second-text">{colour.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Buttons</h2>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-outline">Danger outline</Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button size="sm">Small primary</Button>
          <Button size="sm" variant="outline">
            Small outline
          </Button>
          <Button disabled>Sold out</Button>
          <Button loading>Place order</Button>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Inputs</h2>
        <div className="mt-4 grid max-w-md gap-4">
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" hint="At least 8 characters." />
          <Input label="Password" type="password" error="Password must be at least 8 characters." />
          <Input label="Email" value="jane@example.com" disabled readOnly />
        </div>
      </section>
      <section className="mt-7">
        <h2 className="text-h5 font-bold text-dark">Checkbox & Radio</h2>
        <div className="mt-5 grid max-w-md gap-6">
          <Radio name="type" label="Food" />
          <Radio name="type" label="Product" />
          <Checkbox name="groups" label="Dairy" defaultChecked />
          <Checkbox name="groups" label="Drinks" />
          <Checkbox name="groups" label="Bakery" disabled readOnly />
          <Switch label="Age confirmation" disabled />
          <Switch label="Delivery time slot" defaultChecked />
          <Switch label="Gift wrapping" />
        </div>
      </section>
      <section className="mt-7">
        <h2 className="text-h5 font-bold text-dark">Select</h2>
        <div className="mt-5 grid max-w-md gap-4">
          <Select label="Sort by" defaultValue="price_asc">
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
            <option value="name">Name</option>
          </Select>

          <Select label="Type" defaultValue="" error="Please choose a type.">
            <option value="">Please choose…</option>
            <option value="food">Food</option>
            <option value="product">Product</option>
          </Select>
        </div>
      </section>

      <section className="mt-7">
        <h2 className="text-h5 font-bold text-dark">Badges</h2>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Badge>Placed</Badge>
          <Badge tone="info">Shipped</Badge>
          <Badge tone="success">Delivered</Badge>
          <Badge tone="warning">Preparing</Badge>
          <Badge tone="danger">Sold out</Badge>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Cards</h2>
        <div className="mt-4 grid max-w-3xl grid-cols-2 gap-6">
          <Card>
            <p className="text-paragraph text-second-text">A plain card without a text</p>
          </Card>
          <Card title="Order summary" tone="info">
            <p className="text-paragraph text-second-text">Subtotal (4 items): €58.47</p>
          </Card>
          <Card title="Order status" tone="success">
            <p className="text-paragraph text-second-text">Shipped · On its way</p>
          </Card>
          <Card title="Delivery" tone="warning">
            <p className="text-paragraph text-second-text">12 Vitosha Blvd, apt. 4, 1000 Sofia</p>
          </Card>
          <Card title="Delete" tone="danger">
            <p className="text-paragraph text-second-text">
              Removes it from the shop. Past orders keep their copy.
            </p>
          </Card>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Skeleton</h2>
        <div className="grid max-w-sm gap-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="aspect-square w-40" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Spinner</h2>
        <div className="mt-4 flex items-center gap-4">
          <Spinner />
          <Spinner label="Loading products" className="size-10" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Empty state</h2>
        <div className="mt-4 grid max-w-3xl grid-cols-2 gap-6">
          <Card>
            <EmptyState
              title="Your cart is empty"
              description="Browse the shop and add something you like."
              action={<Button>Start shopping</Button>}
            />
          </Card>
          <Card>
            <EmptyState title="No orders yet" />
          </Card>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Modal</h2>
        <div className="mt-4">
          <Button variant="danger" onClick={() => setIsModalOpen(true)}>
            Delete product
          </Button>
        </div>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Delete “Gouda Cheese, 300 g”?"
        >
          <p className="text-paragraph text-second-text">
            The product will be removed from the shop. Orders that already include it keep their
            copy. This can’t be undone.
          </p>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setIsModalOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Toast</h2>
        <div className="mt-4">
          <Button onClick={() => setIsToastVisible(true)}>Show toast</Button>
          {isToastVisible && (
            <div className="fixed right-4 bottom-4">
              <Toast
                message="Your order #SF-10234 is now Shipped"
                tone="success"
                onClose={() => setIsToastVisible(false)}
              />
            </div>
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Table</h2>
        <div className="mt-4 max-w-3xl">
          <Card>
            <Table caption="My orders">
              <THead>
                <Tr>
                  <Th>Order</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Total</Th>
                  <Th>
                    <span className="sr-only">Actions</span>
                  </Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>#SF-10234</Td>
                  <Td>12 Nov 2026</Td>
                  <Td>
                    <Badge tone="info">Shipped</Badge>
                  </Td>
                  <Td>€58.47</Td>
                  <Td>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>#SF-10198</Td>
                  <Td>8 Nov 2026</Td>
                  <Td>
                    <Badge tone="success">Delivered</Badge>
                  </Td>
                  <Td>€23.10</Td>
                  <Td>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>#SF-10177</Td>
                  <Td>2 Nov 2026</Td>
                  <Td>
                    <Badge tone="warning">Praparing</Badge>
                  </Td>
                  <Td>€41.85</Td>
                  <Td>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Td>
                </Tr>
              </TBody>
            </Table>
          </Card>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Navigation</h2>
        <Header
          actions={
            <>
              <a href="/login" className="text-h6 font-bold text-primary">
                Log in / Register
              </a>
              <Button size="sm" variant="outline">
                Cart (2)
              </Button>
            </>
          }
        />
      </section>
      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Page header</h2>
        <div className="mt-4 grid gap-4">
          <PageHeader
            title="My orders"
            breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'My orders' }]}
          />
          <PageHeader title="Shop" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className=" text-h5 font-bold text-dark">Footer</h2>
        <Footer />
      </section>

      <section className="mt-10">
        <h2 className="text-h5 font-bold text-dark">Product cards</h2>
        <div className="mt-4 grid max-w-xl grid-cols-2 gap-6">
          <ProductCard product={seedProducts[0]} groupName="Fruit & Vegetables" />
          <ProductCard product={seedProducts[18]} groupName="Home & Kitchen" />
        </div>
      </section>
    </main>
  );
}
