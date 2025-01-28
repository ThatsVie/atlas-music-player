import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './src/mocks/server';

beforeAll(() => {
  console.log('Starting MSW server...');
  server.listen({ onUnhandledRequest: 'warn' });
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
  console.log('Resetting MSW handlers...');
});

afterAll(() => {
  console.log('Stopping MSW server...');
  server.close();
});
