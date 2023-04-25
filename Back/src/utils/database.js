const { Sequelize } = require("sequelize");
const status = process.env.STATUS || "development";
const config = require('./../config/databaseConfig.json')[status];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        dialect: config.dialect,
        host: config.host,
        port: config.port,
        logging: false,
    },
);

module.exports = sequelize;