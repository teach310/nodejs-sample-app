const mysql = require('mysql');
const fs = require('fs');
const stringify = require("csv-stringify/lib/sync");

// 本当はパスワードとかをコード直で書くのはNG
const connection = mysql.createConnection({
  host: 'mysql', // hostはdocker-compose.ymlで設定したservice名
  user: 'root',
  password: 'mysql',
  database: 'sample'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connect success');
});

connection.query(
  'SELECT * FROM items',
  (error, results) => {
    const content = stringify(results, { header: true })
    fs.writeFileSync('tasks/csv_samples/output/items.csv', content);
    console.log('items.csvを出力しました');
  }
);

connection.end()
