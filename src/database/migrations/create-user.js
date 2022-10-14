'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
        FavoriteGame: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      user_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      lname:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      gmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      nick_name:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      privilege:{
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('user');
  }
};