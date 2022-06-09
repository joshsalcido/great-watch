"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Cars",
          poster: "https://farm8.staticflickr.com/7457/13104485265_ddd94e847c_o.jpg",
          director: "John Lasseter",
          release: 2006,
          genre: "Animation/Kids",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Click',
          poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Click_film.jpg',
          director: 'Frank Coraci',
          release: 2006,
          genre: 'Comedy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Idiocracy',
          poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/idiocracy11_500x.jpg?v=1620076578',
          director: 'Mike Judge',
          release: 2006,
          genre: 'Comedy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '300',
          poster: 'https://i.pinimg.com/originals/6a/96/99/6a969902921e521b1775711f34378464.jpg',
          director: 'Zack Snyder',
          release: 2006,
          genre: 'Action',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Lake House',
          poster: 'http://3.bp.blogspot.com/_24m2kzhON5s/TJKvAxd7s5I/AAAAAAAAAVk/Dj4_UYx3SfY/s1600/13+-+the+lake+house.jpg',
          director: 'Alejandro Agresti',
          release: 2006,
          genre: 'Romance',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Pursuit of Happyness',
          poster: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-the-pursuit-of-happyness-2006-geek-n-rock.jpg',
          director: 'Gabriele Muccino',
          genre: 'Drama',
          release: 2006,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Fast and the Furious: Tokyo Drift',
          poster: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/34/2019/09/16174819/aHAbhXSWB1O6AReAxN7SW5MrmCI.jpg',
          release: 2006,
          director: 'Justin Lin',
          genre: 'Action',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Hills Have Eyes',
          poster: 'https://media.movieassets.com/static/images/items/movies/posters/3d997babd7168e89ff358ac38601c0b6.jpg',
          release: 2006,
          director: 'Alexandre Aja',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Disturbia",
          poster: "https://m.media-amazon.com/images/I/41hr93nbaAL._AC_.jpg",
          director: "D.J. Caruso",
          release: 2007,
          genre: "Thriller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Superbad",
          poster: "https://m.media-amazon.com/images/I/517Ro9vnOML._AC_.jpg",
          director: "Greg Mottola",
          release: 2007,
          genre: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date
        },
        {
          title: "Hot Fuzz",
          poster: "https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          director: "Edgar Wright",
          release: 2007,
          genre: "Action/Comedy",
          createdAt: new Date(),
          updatedAt: new Date
        },
        {
          title: "Spider-Man 3",
          poster: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
          director: "Sam Raimi",
          release: 2007,
          genre: "Action/Sci-fi",
          createdAt: new Date(),
          updatedAt: new Date
        },
        {
          title: "Bridge to Terabithia",
          poster: "https://m.media-amazon.com/images/I/51I-aNeMHiL._AC_.jpg",
          director: "Gabor Csupo",
          release: 2007,
          genre: "Fantasy",
          createdAt: new Date(),
          updatedAt: new Date
        },
        {
          title: "Into the Wild",
          poster: "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_FMjpg_UX1000_.jpg",
          director: "Sean Penn",
          release: 2007,
          genre: "Drama/Adventure",
          createdAt: new Date(),
          updatedAt: new Date
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Movies", null, {});
  },
};
