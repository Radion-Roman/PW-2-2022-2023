'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('like', {
        user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      like_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      Gcomment_id:{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('like');
  }
};