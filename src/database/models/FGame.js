'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FGame extends Model {
        static associate(models) {
            FGame.belongsTo(models.User)
        }
    }
    FGame.init(
        {
            Favorite_game: {
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              user_id: {
                type: DataTypes.INTEGER
              },
              gid: {
                type: DataTypes.INTEGER
              }
        },
        {
            sequelize,
            modelName: 'FGame'
        });
    return FGame;
};