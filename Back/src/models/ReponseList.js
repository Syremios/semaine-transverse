const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  class ReponseList extends Model {
    static associate(db) {
      ReponseList.belongsTo(db.QuestionList, {
        sourceKey: 'id',
        foreignKey: 'idQuestionList',
        as: 'ReponseList',
        allowNull: false,
      });

      ReponseList.hasMany(db.Resultat, {
        sourceKey: 'id',
        foreignKey: 'idReponseList',
        allowNull: false,
      });
    }
  }

  ReponseList.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'ReponseList',
    freezeTableName: true,
  });

  return ReponseList;
};
