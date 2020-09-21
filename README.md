# serum-dex-scripts

Trading scripts for the Serum Dex

Typescript serum dex scripts

Development only - non-production

# Usage

- Typescript installed locally (not globally) so we use an npm script to run the compiler
- `npm run start`

# Tests

- Single run testing, also this is your basic CI/CD script for testing. If this exits with a 0, then tests are good (including code coverage).
- `npm test`
- Development testing mode (watch all files or a single file)
- `npm run test:watch`
- `npm run test -- --coverage false src/demo.test.ts --watch`
- View the HTML coverage report in a Brave browser (change to suit your browser)
- `npm run view:coverage`
- [Blog post helping with Jest setup](https://medium.com/@admin_86118/testing-typescript-node-with-jest-6bf5db18119c)
