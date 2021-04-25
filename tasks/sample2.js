const fs = require('fs');

const txt = fs.readFileSync('tasks/input1.txt', 'utf-8');
console.log (txt);
const content = txt;
fs.writeFileSync('tasks/output1.txt' , content);
