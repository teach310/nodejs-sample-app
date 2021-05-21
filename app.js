const express = require('express');
const mysql = require('mysql');
const fs = require('fs');

const content = fs.readFileSync('config.json','utf-8');
const config = JSON.parse(content);

// 本当はパスワードとかをコード直で書くのはNG
const connection = mysql.createConnection({
  host: 'mysql', // hostはdocker-compose.ymlで設定したservice名
  user: config.mysql.username,
  password: config.mysql.password,
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
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render("index.ejs", {message: "テストサイトへようこそ!"})
});

app.get('/users', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      res.render("users/index.ejs", {users: results})
    }
  );
});

app.get('/items', (req, res) => {
  connection.query(
    'SELECT * from items',
    (error, results) => {
      res.render('items/index.ejs', { items: results});
    }
  );
});

app.get('/items/new', (req, res) => {
  res.render('items/new.ejs');
});

app.post('/items/create', (req, res) =>{
  connection.query(
    'INSERT INTO items (name) VALUES (?)', 
    [req.body.itemName],
    (error, results) => {
      res.redirect('/items')
    }
  )
})

app.post('/items/delete/:id', (req, res) =>{
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/items');
    }
  );
});

app.get('/items/edit/:id',(req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) =>{
      res.render('items/edit.ejs',{item: results[0]});
    }
  );
});

app.post('/items/update/:id', (req, res) =>{
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error,results) =>{
      res.redirect('/items')
    }
  );
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started port ${port}`));
