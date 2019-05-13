const sequelize = require('../config/database')
const Sequalize = require('sequelize')
const Category = require('./Category')

const Book = sequelize.define(
  'book',
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequalize.STRING
    },
    pages: {
      type: Sequalize.INTEGER
    },
    category_id: {
      type: Sequalize.INTEGER
    }
  },
  { tableName: 'book', timestamps: false }
)

Book.belongsTo(Category, { foreignKey: 'category_id' })

module.exports = Book
