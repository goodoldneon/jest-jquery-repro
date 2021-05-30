module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.(js|ts|tsx)"],
};
