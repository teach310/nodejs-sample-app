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
        // console.log(results);
        // json 化
        const json =JSON.stringify(results)
        console.log(json);
        //.json
        const fs = require("fs");
        fs.writeFileSync("tasks/outputsql.json",json);
        console.log("sql の中身を json 形式で出力しました");

    }
);

connection.end()