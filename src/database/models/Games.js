'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Games extends Model {
        static associate(models) {
            Games.hasMany(models.category)
        }
    }
    Games.init(
        {
            gid: {
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              Gname: {
                type: DataTypes.STRING(50)
              },
              Ggenre:{
                type: DataTypes.STRING(50)
              },
              Glogo: {
                type: DataTypes.STRING(50)
              },
              Gcategory:{
                type: DataTypes.STRING(50)
              },
              Gdescription:{
                type: DataTypes.STRING(500)
              }
        },
        {
          sequelize,
            modelName: 'Games'
        });
    return Games;
};