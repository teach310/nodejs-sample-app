// 暗号化されたconfigを複合してファイルとして保存

const crypto = require('crypto')
const fs = require('fs')

const srcFilePath = 'config';
const destFilePath = 'config.json';
const keyFilePath = 'config.key';

// return key bytes
const readKey = (path) => {
  if (!fs.existsSync(keyFilePath)) {
    throw `key file not found path: ${path}`
  }
  const content = fs.readFileSync(path, 'utf8');
  return Buffer.from(content, 'hex');
}

// data <Buffer> iv + encrypted
// return bytes
const decrypt = (data, key) => {
  const algorithm = 'aes-256-cbc';
  const iv = data.slice(0, 16);
  const encrypted = data.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const decrypted = decipher.update(encrypted);
  return Buffer.concat([decrypted, decipher.final()]);
}

// src 暗号化されたファイルのパス
// dest 出力するファイルのパス
// key 暗号化のキーのbytes
const decryptFile = (src, dest, key) => {
  const srcBytes = fs.readFileSync(src);
  const destBytes = decrypt(srcBytes, key);
  fs.writeFileSync(dest, destBytes.toString('utf8'));
}

const key = readKey(keyFilePath);
decryptFile(srcFilePath, destFilePath, key);
console.log(`${destFilePath} created`)
