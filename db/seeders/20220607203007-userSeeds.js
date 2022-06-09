'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
       */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Josh',
        lastName: 'Salcido',
        userName: 'JoshS',
        email: 'joshuasalcido21@gmail.com',
        password: 'trunkSbulbs#7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Moviegoer',
        lastName: 'MacGillicuddy',
        userName: 'iheartmovies',
        email: 'mmacgillicuddy@mailme.com',
        password: '1heartM0vies!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
