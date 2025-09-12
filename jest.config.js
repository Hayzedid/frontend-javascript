module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/task_*/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
