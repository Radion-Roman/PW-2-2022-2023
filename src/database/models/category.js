'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class category extends Model {
        static associate(models) {
            category.belongsTo(models.Games)
        }
    }
    category.init(
        {
            gid: {
                type: DataTypes.INTEGER,
            },
            Gname: {
                type: DataTypes.STRING(50)
            },
        },
        {
            sequelize,
            modelName: 'category'
        });
    return category;
};