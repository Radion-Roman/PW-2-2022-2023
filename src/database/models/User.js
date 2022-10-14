'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.FGame)
        }
    }
    User.init(
        {
            FavoriteGame: {
                type: DataTypes.STRING(50)
              },
              user_id:{
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              fname: {
                type: DataTypes.STRING(50)
              },
              lname:{
                type: DataTypes.STRING(50)
              },
              gmail: {
                type: DataTypes.STRING(50)
              },
              nick_name:{
                type: DataTypes.STRING(50)
              },
              privilege:{
                type: DataTypes.STRING(50)
              }
        },
        {
            sequelize,
            modelName: 'User'
        });
    return User;
};