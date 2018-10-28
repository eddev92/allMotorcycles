'use strict';
// Migracion de datos para Viajes
// Querys

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      names: {
        type: Sequelize.STRING
      },
      destinity: {
        type: Sequelize.STRING
      },
      dateSal: {
        type: Sequelize.DATE
      },
      dateReturn: {
        type: Sequelize.DATE
      },
      point: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Roads');
  }
};