module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/ext.json', to: 'dist/weapp/ext.json' },
      { from: 'src/assets', to: 'dist/weapp/assets' }
    ],
    options: {

    }
  },
  mini: {},
  h5: {}
}
