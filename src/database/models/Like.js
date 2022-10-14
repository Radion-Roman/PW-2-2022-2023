'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        static associate(models) {
            Like.hasOne(models.chat)
        }
    }
    Like.init(
        {
            user_id: {
                type: DataTypes.INTEGER
              },
              Like_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
              },
              Gcomment_id:{
                type: DataTypes.INTEGER
              }
        },
        {
            sequelize,
            modelName: 'Like'
        });
    return Like;
};