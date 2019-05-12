const Book = require('../models/Book')
const Category = require('../models/Category')

module.exports = {
  index: function(req, res) {
    Book.find(function(err, result) {
      res.render('book/index', { books: result })
    })
  },

  create: function(req, res) {
    Category.find(function(err, result) {
      res.render('book/create', { categories: result })
    })
  },

  store: function(req, res) {
    Book.create(req.body, function(err, result) {
      res.redirect('/book')
    })
  },

  edit: function(req, res) {
    Book.findById(req.params.id, function(err, books) {
      Category.find(function(err, categories) {
        res.render('book/edit', { book: books[0], categories: categories })
      })
    })
  },

  update: function(req, res) {
    Book.update(req.params.id, req.body, function(err, result) {
      res.redirect('/book')
    })
  },

  destroy: function(req, res) {
    Book.destroy(req.params.id, function(err, result) {
      res.redirect('/book')
    })
  }
}
