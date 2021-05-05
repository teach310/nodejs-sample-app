// ファイル読み込みサンプル
// readFileSyncで指定するファイルのパスはプログラムを実行する場所からの相対パスであることに注意。

const fs = require('fs');

const txt = fs.readFileSync('tasks/fs_samples/input.txt', 'utf-8');
console.log(txt);