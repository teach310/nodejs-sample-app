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

connection.query(
    'SELECT * FROM items',
    (error,results) => {
        console.log(results);
        var str2 = JSON.stringify(results);
        fs.writeFileSync('tasks/fs_sample/output.txt', str2);
    }
);

connection.end()
