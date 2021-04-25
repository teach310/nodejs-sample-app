//kadai1
// console.log("Hello World")

//kadai2
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'mysql',
    user:'root',
    password:'mysql',
    database:'sample'
});

connection.connect((err) => {
    if (err){
        console.log("error connecting:" + err.stack);
        return;
    }
    console.log("success");
});

connection.query(
    "SELECT * FROM items",
    (error, results) => {
        console.log(results);
    }
);

connection.end()