const Category = require('../models/Category')

module.exports = {
  index: function(req, res) {
    Category.findAll().then(function(rows) {
      res.json(rows)
    })
  },

  show: function(req, res) {
    Category.findByPk(req.params.id).then(function(row) {
      res.json(row)
    })
  },

  store: function(req, res) {
    Category.create(req.body).then(function(row) {
      res.json(row)
    })
  },

  update: function(req, res) {
    Category.findByPk(req.params.id).then(function(row) {
      row.update(req.body)
      res.json(row)
    })
  },

  destroy: function(req, res) {
    Category.findByPk(req.params.id).then(function(row) {
      row.destroy()
      res.json(row)
    })
  }
}
