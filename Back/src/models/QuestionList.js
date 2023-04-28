const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  class QuestionList extends Model {
    static associate(db) {
      QuestionList.belongsTo(db.ItemList, {
        sourceKey: 'id',
        foreignKey: 'idItemList',
        as: 'Questions',
        allowNull: false,
      });

      QuestionList.hasMany(db.Resultat, {
        sourceKey: 'id',
        foreignKey: 'idQuestionList',
        allowNull: false,
      });

      QuestionList.hasMany(db.ReponseList, {
        sourceKey: 'id',
        foreignKey: 'idQuestionList',
        as: 'ReponseList',
        allowNull: false,
      });
    }
  }

  QuestionList.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'QuestionList',
    freezeTableName: true,
  });

  return QuestionList;
};
