const Sequelize = require('sequelize')
const config = require('config')
const instance = new Sequelize(
    config.get('mysql.database') config.get('user') config.get('password') config.get('password')
)

module.exports = instance