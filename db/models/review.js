"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      rating: DataTypes.INTEGER,
      reviewBody: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Movie, { foreignKey: "movieId" });
  };
  return Review;
};
