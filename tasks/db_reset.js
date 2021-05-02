const mysql = require('mysql');
const fs = require('fs').promises;

const run = async () => {
  // 本当はパスワードとかをコード直で書くのはNG
  const connection = mysql.createConnection({
    host: 'mysql', // hostはdocker-compose.ymlで設定したservice名
    user: 'root',
    password: 'mysql',
    database: 'sample'
  });

  const json = await fs.readFile('tasks/items.json', 'utf-8');
  console.log(json);
  const items = JSON.parse(json);
  console.log(items);
  const values = items.map(item => Object.values(item))
  items.forEach(item => console.log(item));
  console.log(values)

  try {
    await connectAsync(connection);
    await queryAsync(connection, 'DELETE FROM items')
    await queryWithValuesAsync(connection, 'INSERT INTO items (id, name) VALUES ?', values);
  } catch (err) {
    console.log(err)
  }

  connection.end()
  console.log("item inserted");
};


const connectAsync = (connection) => {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        reject('error connecting: ' + err.stack);
        return;
      }
      resolve();
    });
  });
}

const queryAsync = (connection, query) => {
  return new Promise((resolve, reject) => {
    connection.query(
      query,
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
}

// values: [ [ 1, 'ハム' ], [ 2, 'きゅうり' ], [ 3, 'わかめ' ], [ 4, 'たまご' ] ]
// [values]: [ [ [ 1, 'ハム' ], [ 2, 'きゅうり' ], [ 3, 'わかめ' ], [ 4, 'たまご' ] ] ]
const queryWithValuesAsync = (connection, query, values) => {
  return new Promise((resolve, reject) => {
    connection.query(
      query,
      [values],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
}

run();