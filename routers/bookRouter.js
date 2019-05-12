const express = require('express')
const router = express.Router()
const con = require('../config/database')

router.get('/', function(req, res) {
  con.query(
    `SELECT
      book.id, 
      book.title, 
      book.pages, 
      category.name AS category_name 
      FROM book JOIN category ON category.id = book.category_id`,
    function(err, result) {
      res.render('book/index', { books: result })
    }
  )
})

router.get('/create', function(req, res) {
  con.query('SELECT * From category', function(err, result) {
    res.render('book/create', { categories: result })
  })
})

router.post('/', function(req, res) {
  const { title, pages, category_id } = req.body
  con.query(
    `INSERT INTO book SET title='${title}', pages=${pages}, category_id=${category_id}`,
    function(err, result) {
      res.redirect('/book')
    }
  )
})

router.get('/:id/edit', function(req, res) {
  con.query(
    `SELECT 
      book.id,
      book.title, 
      book.pages,
      book.category_id
      FROM book WHERE id=${req.params.id}`,
    function(err, books) {
      con.query(
        `SELECT 
          category.id, 
          category.name 
          From category`,
        function(err, categories) {
          res.render('book/edit', { book: books[0], categories: categories })
        }
      )
    }
  )
})

router.put('/:id', function(req, res) {
  const { title, pages, category_id } = req.body
  con.query(
    `UPDATE book SET 
      title='${title}', 
      pages=${pages},
      category_id=${category_id}
      WHERE id=${req.params.id}`,
    function(err, result) {
      if (err) throw err
      res.redirect('/book')
    }
  )
})

router.delete('/:id', function(req, res) {
  con.query(`DELETE FROM book WHERE id=${req.params.id}`, function(
    err,
    result
  ) {
    res.redirect('/book')
  })
})

module.exports = router
