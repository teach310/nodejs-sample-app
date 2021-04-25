//読み込み
// const fs = require("fs");

// const txt = fs.readFileSync('tasks/input.txt','utf-8');
// console.log(txt)

//書き込み
const fs = require("fs");
content = fs.readFileSync('tasks/input.txt', 'utf-8');
fs.writeFileSync("tasks/output.csv",content);
console.log("output.txt を出力しました");