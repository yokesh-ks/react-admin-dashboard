module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^components/(.*)$',
    '^context/(.*)$',
    '^data/(.*)$',
    '^helpers/(.*)$',
    '^ions/(.*)$',
    '^layouts/(.*)$',
    '^navigation/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
