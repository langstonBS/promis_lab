

const fs = require('fs').promises;

const readFilePaths = './package.json';
  
const promisesForEachFile = fs.readFile(readFilePaths, { encoding: 'utf8' });
Promise.allSettled(promisesForEachFile)
  .then(file => {
    console.log(file);
  });


fs.writeFile('./File.txt', 'im in a not').then(console.log('done'));

Promise.allSettled(promisesForEachFile)
  .then(file => {
    fs.writeFile('./File.txt', file).then(console.log('done'));
  });

fs.readFile(readFilePaths, { encoding: 'utf8' }).then(read => console.log(read));

//fs.readFile(readFilePaths, { encoding: 'utf8' }).then(fs.writeFile('./File.txt', 'im in a not').then(console.log('done')));






  
