'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieShelf = sequelize.define('MovieShelf', {
    movieId: DataTypes.INTEGER,
    shelfId: DataTypes.INTEGER
  }, {});
  MovieShelf.associate = function(models) {
    // associations can be defined here
    // MovieShelf.hasOne(models.Shelf, { foreignKey: 'shelfId'})
    // MovieShelf.hasMany(models.Movie, { foreignKey: 'id'})
  };
  return MovieShelf;
};
