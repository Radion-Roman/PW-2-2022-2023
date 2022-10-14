'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
        gid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Gname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      Ggenre:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      Glogo: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      Gcategory:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      Gdescription:{
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};