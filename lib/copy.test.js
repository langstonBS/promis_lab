const fsPromises = require('fs').promises;
const { copy } = require('./copy');

describe('read first function', () => {
  beforeAll(() => {
    return Promise.all([
      fsPromises.writeFile('./my-test-file1.txt', 'WhyMe'),
      fsPromises.writeFile('./transform.txt', 'tacocatS'),
    ]);
  });

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./my-test-file1.txt'),
      fsPromises.unlink('./transform.txt')
    ]);
  });

  it('TEST copy FUNCTION', () => {

    return copy('./my-test-file1.txt', './copy.txt')
      .then(() => {
        return fsPromises.readFile('./copy.txt', { encoding: 'utf8' });
      })
      .then(content => {
        expect(content).toEqual('WhyMe');
      });
  });
});
