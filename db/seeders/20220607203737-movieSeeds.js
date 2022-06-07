'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Movies', [
        {
          title: 'Cars',
          poster: 'https://farm8.staticflickr.com/7457/13104485265_ddd94e847c_o.jpg',
          director: 'John Lasseter',
          release: 2006,
          genre: 'Animation/Kids',
          reviewId: 1,
          ratingId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Movies', null, {});

  }
};
