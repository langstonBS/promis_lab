

const fs = require('fs').promises;

const readFilePaths = ['./package.json'];
  
const promisesForEachFile = readFilePaths.map(path => fs.readFile(path, { encoding: 'utf8' }));
Promise.allSettled(promisesForEachFile)
  .then(file => {
    console.log(file);
  });


fs.writeFile('./File.txt', 'im in a not').then(console.log('done'));







  
