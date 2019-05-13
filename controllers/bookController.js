const Book = require('../models/Book')
const Category = require('../models/Category')

module.exports = {
  index: function(req, res) {
    Book.findAll({ include: [{ model: Category }] }).then(function(rows) {
      res.json(rows)
    })
  },

  show: function(req, res) {
    Book.findByPk(req.params.id, { include: [{ model: Category }] }).then(
      function(row) {
        res.json(row)
      }
    )
  },

  store: function(req, res) {
    Book.create(req.body).then(function(row) {
      res.json(row)
    })
  },

  update: function(req, res) {
    Book.findByPk(req.params.id).then(function(row) {
      row.update(req.body)
      res.json(row)
    })
  },

  destroy: function(req, res) {
    Book.findByPk(req.params.id).then(function(row) {
      row.destroy()
      res.json(row)
    })
  }
}
