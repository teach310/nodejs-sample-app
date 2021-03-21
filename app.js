const express = require('express');
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

const app = express();

app.get('/', (req, res) => {
  res.render("index.ejs", {message: "うおおおおおお"})
});

app.get('/users', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      res.render('users/index.ejs',{users: results});
    }
  );
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started port ${port}`));