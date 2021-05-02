const mysql = require('mysql');
const fs = require('fs');

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

const data1 = fs.readFileSync('tasks/fs_sample/input.txt', 'utf-8');
var content = JSON.parse(data1);
console.log(content);

connection.query(
    'INSERT INTO items (name) VALUES (?)',
        [id.name],
        (error, results) => {
            fs.writeFileSync(content);
        }
);

connection.end()


