const stringify = require("csv-stringify/lib/sync");

const from = [
  { id: 2, name: 'りんご' },
  { id: 2, name: 'バナナ' },
  { id: 3, name: 'オレンジ' }
]

const result = stringify(from, { header: true });
console.log(result);
// id,name
// 2,りんご
// 2,バナナ
// 3,オレンジ