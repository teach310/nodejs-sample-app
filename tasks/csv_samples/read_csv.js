const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const content = fs.readFileSync('tasks/csv_samples/input/items.csv', 'utf-8');
const items = parse(content, { columns: true });
console.log(items);

items.forEach(item => {
  console.log(`${item.id} ${item.name}`);
});
