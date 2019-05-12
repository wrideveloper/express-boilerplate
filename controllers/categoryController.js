const Category = require('../models/Category')

module.exports = {
  index: function(req, res) {
    Category.find(function(err, result) {
      res.render('category/index', { categories: result })
    })
  },

  create: function(req, res) {
    res.render('category/create')
  },

  store: function(req, res) {
    Category.create(req.body, function(err, result) {
      res.redirect('/category')
    })
  },

  edit: function(req, res) {
    Category.findById(req.params.id, function(err, result) {
      res.render('category/edit', { category: result[0] })
    })
  },

  update: function(req, res) {
    Category.update(req.params.id, req.body, function(err, result) {
      res.redirect('/category')
    })
  },

  destroy: function(req, res) {
    Category.destroy(req.params.id, function(err, result) {
      res.redirect('/category')
    })
  }
}
