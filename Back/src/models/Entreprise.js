const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  class Entreprise extends Model {
    static associate(db) {
      // Une entreprise a plusieurs Item
      Entreprise.hasMany(db.Item, {
        sourceKey: 'id',
        foreignKey: 'idEntreprise',
        as: 'Item',
        allowNull: false,
      });
    }
  }

  Entreprise.init({
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
    modelName: 'Entreprise',
    freezeTableName: true,
  });

  return Entreprise;
};
