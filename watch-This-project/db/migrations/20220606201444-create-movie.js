'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      poster: {
        type: Sequelize.STRING
      },
      director: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      release: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      reviewId: {
        type: Sequelize.INTEGER,
        references: { model: 'Reviews' }
      },
      ratingId: {
        type: Sequelize.INTEGER,
        references: { model: 'Reviews' }
      },
      shelfId: {
        type: Sequelize.INTEGER,
        references: { model: 'Shelves' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
