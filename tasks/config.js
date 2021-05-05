const fs = require('fs');

const content = fs.readFileSync('config.json','utf-8');
const config = JSON.parse(content);
console.log(config);
console.log(config.mysql.username);
console.log(config.mysql.password);
