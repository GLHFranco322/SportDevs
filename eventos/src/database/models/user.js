'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};