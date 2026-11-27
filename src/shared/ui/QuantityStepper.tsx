import { Minus, Plus } from 'lucide-react';

type QuantityStepperProps = {
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export function QuantityStepper({
  value,
  min = 1,
  max,
  onChange,
  disabled = false,
}: QuantityStepperProps) {
  const cannotDecrease = disabled || value <= min;
  const cannotIncrease = disabled || value >= max;

  return (
    <div className="inline-flex items-center rounded-md border border-light-gray-2">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={cannotDecrease}
        onClick={() => onChange(value - 1)}
        className="flex h-13 w-11.5 items-center justify-center text-primary cursor-pointer disabled:cursor-not-allowed disabled:text-muted"
      >
        <Minus aria-hidden="true" className="size-4" />
      </button>

      <output aria-live="polite" className="w-11 text-center text-h6 font-bold text-dark">
        {value}
      </output>

      <button
        type="button"
        aria-label="Increase quantity"
        disabled={cannotIncrease}
        onClick={() => onChange(value + 1)}
        className="flex h-13 w-11.5 items-center justify-center text-primary cursor-pointer disabled:cursor-not-allowed disabled:text-muted"
      >
        <Plus aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
