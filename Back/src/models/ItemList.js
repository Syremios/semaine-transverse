const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  class ItemList extends Model {
    static associate(db) {
      ItemList.belongsTo(db.Axe, {
        sourceKey: 'id',
        foreignKey: 'idAxe',
        allowNull: false,
      });

      ItemList.hasMany(db.QuestionList, {
        sourceKey: 'id',
        foreignKey: 'idItemList',
        as: 'Questions',
        allowNull: false,
      });

      ItemList.hasMany(db.Item, {
        sourceKey: 'id',
        foreignKey: 'idItemList',
        allowNull: false,
      });
    }
  }

  ItemList.init({
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
    modelName: 'ItemList',
    freezeTableName: true,
  });

  return ItemList;
};
