"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          rating: 1,
          reviewBody: "Lovely little movie",
          userId: 1,
          movieId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          reviewBody: "Great Movie!",
          userId: 2,
          movieId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating: 5,
          reviewBody: "The perfect film!",
          userId: 2,
          movieId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
