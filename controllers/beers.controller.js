const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();




exports.list = (req, res) => {
  fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(beersFromApi => {
      res.render('beers', { beers: beersFromApi });
    })
    .catch(error => console.log(error));
};

exports.randomBeer = (req, res) => {
    punkAPI
      .getRandom()
      .then(responseFromAPI => {
        const randomBeer = responseFromAPI[0];
        res.render('random-beers', { beer: randomBeer });
      })
      .catch(error => console.log(error));
  };
