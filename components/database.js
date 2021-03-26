const { Sequelize, DataTypes } = require('sequelize');

const maindb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    timezone: '+07:00'
});

const users                     = require('../models/users');
const user_sessions             = require('../models/user_sessions');

const usersModel                = users(maindb, DataTypes);
const userSessionsModel         = user_sessions(maindb, DataTypes);

module.exports = { 
    users: usersModel,
    user_sessions: userSessionsModel
};
