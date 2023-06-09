'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi many-to-many --> components
      Supplier.hasMany(models.Component_Supplier, {
        foreignKey: 'supplier_id',
        as: 'component_suppliers',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

    }
  }
  Supplier.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};