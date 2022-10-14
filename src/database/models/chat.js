'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat extends Model {
        static associate(models) {
            chat.belongsTo(models.Like)
        }
    }
    chat.init(
        {
            user_id: {
                foreignKey: true,
                type: DataTypes.INTEGER
              },
              Coment_id: {
                type: DataTypes.INTEGER
              }
        },
        {
            sequelize,
            modelName: 'chat'
        });
    return chat;
};