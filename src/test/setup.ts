import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '../mocks/server';
import { resetDb } from '../mocks/db';
import { cleanup } from '@testing-library/react';

beforeAll(() => server.listen({ onUnhandledFrame: 'error' }));

afterEach(() => {
  cleanup();
  server.resetHandlers();
  resetDb();
});

afterAll(() => server.close());

HTMLDialogElement.prototype.showModal ??= function (this: HTMLDialogElement) {
  this.open = true;
};
HTMLDialogElement.prototype.close ??= function (this: HTMLDialogElement) {
  this.open = false;
  this.dispatchEvent(new Event('close'));
};
