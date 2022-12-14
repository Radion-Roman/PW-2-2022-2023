'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('category', {
      gid: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      gname: {
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
    await queryInterface.dropTable('category');
  }
};