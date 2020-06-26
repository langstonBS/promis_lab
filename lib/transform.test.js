const fsPromises = require('fs').promises;
const { transform } = require('./copy');

describe('Transform test', () => {
  beforeAll(() => {
    return Promise.all([
      fsPromises.writeFile('./transform.txt', 'tacocatS')
    ]);
  });

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./my-test-file1.txt'), fsPromises.unlink('./transform.txt')
    ]);
  });

  it('TRANSFORM a FILE', () => {
    return transform('./transform.txt')
      .then(text => {
        expect(text).toEqual('TACOCAT');

      });
  });
});
