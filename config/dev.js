module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/ext.json', to: 'dist/weapp/ext.json' }
    ],
    options: {

    }
  },
  mini: {},
  h5: {}
}
