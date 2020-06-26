//const request = require('superagent');
const request = require('superagent');

const getQuote = (name) => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${name}`)
    .then(({ body:{ character, image, quote } }) => ({
      character:character,
      image: image,
      quote: quote  
    }));
};


  

module.exports = {
  getQuote,
};
