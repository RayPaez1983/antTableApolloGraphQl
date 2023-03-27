import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  viewportWidth: 1470,
  viewportHeight: 1000,
  env: {
    // https://github.com/bahmutov/cypress-slow-down
    commandDelay: 500,
  },
});
