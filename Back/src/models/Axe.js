const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  class Axe extends Model {
    static associate(db) {
      Axe.hasMany(db.ItemList, {
        sourceKey: 'id',
        foreignKey: 'idAxe',
        allowNull: false,
      });
    }
  }

  Axe.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Axe',
    freezeTableName: true,
  });

  return Axe;
};
