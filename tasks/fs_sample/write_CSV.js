const fs = require('fs');
const csv = require('csv');

const content = fs.readFileSync('tasks/fs_sample/input.csv' ,'utf-8');

fs.writeFileSync('tasks/fs_sample/sample.csv',content,(error)=>{
    console.log('処理データをCSV出力しました。');
})

console.log("aaaa")

// const parser = csv.parse((error, data) => {
//     //内容出力
//     console.log('初期データ');
//     console.log(data);

//     //変換後の配列を格納
//     let newData = [];

//     // //ループしながら１行ずつ処理
//     // data.forEach((element, index, array) => {
//     //     let row = [];
//     //     row.push(element[0]);
//     //     row.push(element[1].toUpperCase()); //2カラム目を大文字へ
//     //     row.push(element[2]);
//     //     //新たに1行分の配列(row)を作成し、新配列(newData)に追加。
//     //     newData.push(row);
//     // })

//     console.log('処理データ');
//     console.log(newData);

//     //write
//     csv.stringify(newData,(error,output)=>{
//         fs.writeFile('tasks/fs_sample/sample.csv',output,(error)=>{
//             console.log('処理データをCSV出力しました。');
//         })
//     })
// })

// //読み込みと処理を実行
// fs.createReadStream('tasks/fs_sample/sample.csv').pipe(parser);