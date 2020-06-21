module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      packageJson: 'package.json'
    }
  },
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "packages/**/src/**/{!(exception),}.ts",
    "packages/**/src/**/*.tsx"
  ],
  testMatch: [
    "<rootDir>/**/tests/**/*.ts?(x)",
    "<rootDir>/**/__tests__/**/*.ts?(x)",
    "<rootDir>/**/?(*.)(spec|test).ts?(x)",
    "<rootDir>/**/?(*-)(spec|test).ts?(x)"
  ],
  testPathIgnorePatterns: [
    "/cjs/",
    "/dist/",
    "/es/",
    "/lib/",
    "/build/",
    "e2e",
    "examples",
    "/umd/"
  ],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ],
  watchPathIgnorePatterns: [
    "/cjs/",
    "/dist/",
    "/es/",
    "/examples/",
    "/lib/",
    "/results/"
  ]
};
