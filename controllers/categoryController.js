const Category = require('../models/Category')

module.exports = {
  index: function(req, res) {
    Category.find(function(err, result) {
      res.json(result)
    })
  },

  show: function(req, res) {
    Category.findById(req.params.id, function(err, result) {
      res.json(result[0])
    })
  },

  store: function(req, res) {
    Category.create(req.body, function(err, result) {
      Category.findById(result.insertId, function(err, result) {
        res.json(result[0])
      })
    })
  },

  update: function(req, res) {
    Category.update(req.params.id, req.body, function(err, result) {
      Category.findById(req.params.id, function(err, result) {
        res.json(result[0])
      })
    })
  },

  destroy: function(req, res) {
    Category.destroy(req.params.id, function(err, result) {
      res.json(result)
    })
  }
}
