"use strict";

const { user } = require("pg/lib/defaults");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Shelf, { foreignKey: "userId" });
    User.hasMany(models.Review, { foreignKey: "userId" });
  };
  return User;
};
