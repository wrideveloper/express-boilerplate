const sequelize = require('../config/database')
const Sequalize = require('sequelize')

const Category = sequelize.define(
  'category',
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequalize.STRING
    }
  },
  { tableName: 'category', timestamps: false }
)

module.exports = Category
