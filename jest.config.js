module.exports = {
  'preset': 'jest-preset-angular',
  'setupFilesAfterEnv': ['<rootDir>/jest-setup.ts'],
  'verbose': true,

  'testPathIgnorePatterns': [
    'node_modules',
    'test.ts'
  ]

  // "transform": {
  //   "(html)": "<rootDir>/node_modules/jest-templatecache-transformer",
  //   "(js)": "<rootDir>/test/src/jest.transform.js",
  // },
};
