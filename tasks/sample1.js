const fs = require('fs');

const txt = fs.readFileSync('tasks/input1.txt' ,'utf-8');
console.log(txt);

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'mysql',
    database: 'sample'
});

connection.connect((err) =>{
    if(err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

connection.query(
    'SELECT * FROM items',
    (error,results) => {
        console.log(results);
    }
);

connection.end()