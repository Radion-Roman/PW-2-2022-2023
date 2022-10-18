'use strict';

const countries = require('../seeders/Games-Seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Games', Games, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Games', null, {});
  }
};