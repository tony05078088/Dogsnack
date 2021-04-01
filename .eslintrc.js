module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never']
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 0,
    'no-tabs': 'off'
  }
}
