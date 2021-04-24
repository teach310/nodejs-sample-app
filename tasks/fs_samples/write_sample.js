// ファイル書き込みサンプル
// 書き込みは上書き。

const fs = require('fs');

const content = 'Hello 書き込み！!!!'
fs.writeFileSync('tasks/fs_samples/output.txt', content);
console.log('output.txtを出力しました');