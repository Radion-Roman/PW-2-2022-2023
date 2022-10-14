'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chat', {
      user_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      Coment_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
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
    await queryInterface.dropTable('chat');
  }
};