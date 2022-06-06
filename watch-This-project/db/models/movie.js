'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    director: DataTypes.STRING,
    release: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    reviewsId: DataTypes.INTEGER,
    ratingId: DataTypes.INTEGER,
    shelfId: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "MovieShelf",
      otherKey: "shelfId",
      foreignKey: "movieId",
    };
    Movie.belongsToMany(models.Shelf, columnMapping);

    Movie.hasMany(models.Review, {foreignKey: 'reviewId'});
    //Movie.belongsToMany(models.Shelf, {foreignKey: 'shelfId'})
  };
  return Movie;
};
