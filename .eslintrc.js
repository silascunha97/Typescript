module.exports = {
    env: {
        browser: true,
        ESNext: true,
        node: true,
    },
    extends: [
        'eslintrecommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript/recommended',
    ],
    global: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 15,
        sourceType: 'module',
    },
    plugin: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
    },
};