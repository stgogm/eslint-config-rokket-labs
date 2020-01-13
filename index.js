module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'import'],
  settings: {
    react: {
      version: '16',
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'avoid',
      },
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    curly: ['error', 'multi'],
    'default-case': 'error',
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    eqeqeq: 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/named': 'error',
    'import/default': 'error',
    'no-case-declarations': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-eq-null': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'no-var': 'error',
    'prefer-const': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
  },
}
