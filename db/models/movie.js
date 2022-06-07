"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      title: DataTypes.STRING,
      poster: DataTypes.STRING,
      director: DataTypes.STRING,
      release: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      reviewId: DataTypes.INTEGER,
      ratingId: DataTypes.INTEGER,
      // shelfId: DataTypes.INTEGER,
    },
    {}
  );
  Movie.associate = function (models) {
    const columnMapping = {
      through: "MovieShelf",
      otherKey: "shelfId",
      foreignKey: "movieId",
    };
    Movie.belongsToMany(models.Shelf, columnMapping);
    Movie.hasMany(models.Review, { foreignKey: "id" });
  };
  return Movie;
};
