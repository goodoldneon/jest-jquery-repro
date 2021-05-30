addMochaPolyfills();

/**
 * Replace Mocha functions with their Jest equivalents.
 */
function addMochaPolyfills() {
  global.suite = global.describe;
  global.setup = global.beforeEach;
  global.suiteSetup = global.beforeAll;
  global.suiteTeardown = global.afterAll;
  global.teardown = global.afterEach;
}
