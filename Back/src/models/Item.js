const { DataTypes, Model, Sequelize } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns
 */
module.exports = (sequelize) => {
    class Item extends Model {
        static associate(db) {

            // Un Item a plusieurs Entreprise
            Item.belongsTo(db.Entreprise, {
                sourceKey: 'id',
                foreignKey: 'idEntreprise',
                as: 'Item',
                allowNull: false    
            });

            Item.belongsTo(db.ItemList, {
                sourceKey:'id',
                foreignKey: 'idItemList',
                as: 'ItemList',
                allowNull: false
            });

            Item.hasMany(db.Resultat, { 
                sourceKey: 'id',
                foreignKey: 'idItem',
                as: 'Resultat',
                allowNull: false
            });
        }
    };

    Item.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        proposition: {
            type: DataTypes.STRING,
        },
    }, {
        createdAt: false,
        updatedAt: false,
        sequelize,
        modelName: 'Item',
        freezeTableName: true,
    });

    return Item;
}