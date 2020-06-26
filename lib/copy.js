
const fsPromises = require('fs').promises;

const copy = (src, dst) => {
  const file = fsPromises.readFile(src, { encoding: 'utf8' });
  return file.then(file => fsPromises.writeFile(dst, file));
};

const transform = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(str => {
      return str
        .split('')
        .filter(item => item === item.toLowerCase())
        .reverse()
        .join('')
        .toUpperCase();
    });
};

module.exports = {
  copy,
  transform
};


