'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.MeasurementUnit, { foreignKey: 'measurementUnitId'});
    Ingredient.belongsTo(models.Recipe, { foreignKey: 'recipeId'});
  };
  return Ingredient;
};