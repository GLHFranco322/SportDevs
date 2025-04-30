'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shopping_Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shopping_Car.init({
    id_users: DataTypes.INTEGER,
    id_products: DataTypes.INTEGER,
    cant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shopping_Car',
  });
  return Shopping_Car;
};