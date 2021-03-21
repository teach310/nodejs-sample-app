const mysql = require('mysql');

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
  console.log('success');
});

connection.query(
  'SELECT * FROM users',
  (error, results) => {
    console.log(results);
  }
);

connection.end()

