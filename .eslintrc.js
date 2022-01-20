module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/no-shadow': ['error'],
          'no-shadow': 'off',
          'no-undef': 'off',
        },
      },
    ],
    rules: {
      'prettier/prettier': 0,
      'react-native/no-inline-styles': 'off',
      'no-trailing-spaces': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  };
  