const Sequelize = require('sequelize')

const sequelize = new Sequelize('express-boilerplate', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
