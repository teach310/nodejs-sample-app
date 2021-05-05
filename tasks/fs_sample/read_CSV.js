const fs = require('fs');
const csv = require('csv');

//csvのまま出力
fs.createReadStream('tasks/fs_sample/sample.csv')
  .pipe(process.stdout);

//オブジエクトにして出力
fs.createReadStream('tasks/fs_sample/sample.csv')
.pipe(csv.parse({columns: true}, function(err, data) {

    console.log(data);

}));