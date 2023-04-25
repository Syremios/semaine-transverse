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
                as: 'Item',
                allowNull: false
            });

            Resultat.belongsTo(db.QuestionList, { 
                sourceKey: 'id',
                foreignKey: 'idQuestionList',
                as: 'Question',
                allowNull: false
            });

            Resultat.hasMany(db.ReponseList, { 
                sourceKey: 'id',
                foreignKey: 'idReponseList',
                as: 'Reponse',
                allowNull: false
            });
        }
    };

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
}