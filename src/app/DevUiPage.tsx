import { Button } from '../shared/ui/Button';
import { Input } from '../shared/ui/Input';
import { Radio } from '../shared/ui/Radio';
import { Checkbox } from '../shared/ui/Checkbox';
import { Select } from '../shared/ui/Select';
import { Badge } from '../shared/ui/Badge';
import { Card } from '../shared/ui/Card';

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
    </main>
  );
}
