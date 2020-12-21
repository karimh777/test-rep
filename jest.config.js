module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coverageDirectory: './coverage/',
  testEnvironmentOptions: {
    pretendToBeVisual: true,
  },
  setupFilesAfterEnv: ['./tests/setup.js'],
};
