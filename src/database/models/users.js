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
    surname: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    subscribed: DataTypes.BOOLEAN,
    profilePicture: DataTypes.STRING // Nuevo campo para la foto de perfil
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};