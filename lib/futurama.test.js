const { getQuote } = require('./futurama');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        character: 'Bender',
        quote: '...Martini-drinking contest with the auto-pilot. I would have won, except we ran out of olives.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      }
    });
  }
}));


describe('Futurama Quotes', () => {
  it('can get a bender quote', () => {
    return getQuote('bender')
      .then(quote => {
        expect(quote).toEqual({
          character: 'Bender',
          quote: '...Martini-drinking contest with the auto-pilot. I would have won, except we ran out of olives.',
          image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        });
      });
  });
});
