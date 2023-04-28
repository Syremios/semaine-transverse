const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  class Resultat extends Model {
    static associate(db) {
      Resultat.belongsTo(db.Item, {
        sourceKey: 'id',
        foreignKey: 'idItem',
        as: 'Resultat',
        allowNull: false,
      });

      Resultat.belongsTo(db.QuestionList, {
        sourceKey: 'id',
        foreignKey: 'idQuestionList',
        allowNull: false,
      });

      Resultat.belongsTo(db.ReponseList, {
        sourceKey: 'id',
        foreignKey: 'idReponseList',
        allowNull: false,
      });
    }
  }

  Resultat.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Resultat',
    freezeTableName: true,
  });

  return Resultat;
};
