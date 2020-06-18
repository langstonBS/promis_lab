
const fsPromises = require('fs').promises;

export function copy(src, dst) {
  const copyFile = fsPromises.readFile(src);
  return Promise.all(
    fsPromises.writeFile(dst, copyFile)
  );
}

