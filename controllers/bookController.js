const Book = require('../models/Book')

module.exports = {
  index: function(req, res) {
    Book.find(function(err, result) {
      res.json(result)
    })
  },

  show: function(req, res) {
    Book.findById(req.params.id, function(err, result) {
      res.json(result[0])
    })
  },

  store: function(req, res) {
    Book.create(req.body, function(err, result) {
      Book.findById(result.insertId, function(err, result) {
        res.json(result[0])
      })
    })
  },

  update: function(req, res) {
    Book.update(req.params.id, req.body, function(err, result) {
      Book.findById(req.params.id, function(err, result) {
        res.json(result[0])
      })
    })
  },

  destroy: function(req, res) {
    Book.destroy(req.params.id, function(err, result) {
      res.json({ success: true })
    })
  }
}
