module.exports = {
  verbose: true,
  build: {
    overwriteDest: true,
  },
  ignoreFiles: [
    'web-ext-config.js',
    'README.md'
  ],
  run: {
    firefox: 'firefox'
  },
};