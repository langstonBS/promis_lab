const request = require('superagent');



const getCharacter = (id) => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body: { name, status, species } }) => ({
      name,
      status,
      species
    }));
};


const getManyCharacters = (ids) => {
  return Promise.all(ids.map(id => getCharacter(id)));
};

module.exports = {
  getCharacter,
  getManyCharacters
};

