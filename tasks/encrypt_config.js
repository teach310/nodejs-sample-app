// 前提
// プログラマの暗号化入門
// https://qiita.com/asksaito/items/1793b8d8b3069b0b8d68
// config.jsonを暗号化する
// 暗号化キーがない場合生成する。

const crypto = require('crypto')
const fs = require('fs')

const srcFilePath = 'config.json';
const destFilePath = 'config';
const keyFilePath = 'config.key';

// return key bytes
const readKeyOrCreate = (path) => {
  if (!fs.existsSync(keyFilePath)) {
    const key = crypto.randomBytes(32);
    fs.writeFileSync(path, key.toString('hex'));
    return key;
  }

  const content = fs.readFileSync(path, 'utf8');
  return Buffer.from(content, 'hex');
}

// cbc (https://ja.wikipedia.org/wiki/%E6%9A%97%E5%8F%B7%E5%88%A9%E7%94%A8%E3%83%A2%E3%83%BC%E3%83%89)
// 最も広く用いられているらしいのでcbcを使用
// data <Buffer>
// return iv + enctypted <Buffer>
const encrypt = (data, key) => {
  const algorithm = 'aes-256-cbc';
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(data);
  return Buffer.concat([iv, encrypted, cipher.final()]);
}

// src 暗号化するファイルのパス
// dest 出力するファイルのパス
// key 暗号化のキーのbytes
const encryptFile = (src, dest, key) => {
  const srcBytes = fs.readFileSync(src);
  const destBytes = encrypt(srcBytes, key);
  fs.writeFileSync(dest, destBytes);
}

const key = readKeyOrCreate(keyFilePath);
encryptFile(srcFilePath, destFilePath, key);
console.log(`${destFilePath} created`)
