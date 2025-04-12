/** @satisfies {import('prettier').Config & Record<string, unknown>} */
const config = {
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: false,
    importOrder: [
      '^node:(.+)$',
      '<THIRD_PARTY_MODULES>',
      '^@/(.+)$', // internal files (for next.js web package)
      '^#(.+)$', // internal files
      '^[./]', // relative files
    ],
    jsxSingleQuote: false,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-packagejson',
    ],
    printWidth: 80,
    quoteProps: 'as-needed',
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
  }
  export default config