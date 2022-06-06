'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "MovieShelf",
      otherKey: "movieId",
      foreignKey: "shelfId",
    };
    Shelf.belongsToMany(models.Movie, columnMapping);
    Shelf.belongsTo(models.User, {foreignKey: 'userId'})
    //Shelf.belongsToMany(models.Movie, {foreignKey: 'movieId'})
  };
  return Shelf;
};
