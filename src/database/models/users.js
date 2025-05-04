'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Roles, {
        as: 'rol',
        foreignKey: 'rolId'
      });
    }
  }
  Users.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.INTEGER,
    country: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};