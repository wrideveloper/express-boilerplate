const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express-boilerplate'
})

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(methodOverride('method'))
app.use(express.urlencoded({ extended: true }))

app.get('/book', function(req, res) {
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

app.get('/book/create', function(req, res) {
  con.query('SELECT * From category', function(err, result) {
    res.render('book/create', { categories: result })
  })
})

app.post('/book', function(req, res) {
  const { title, pages, category_id } = req.body
  con.query(
    `INSERT INTO book SET title='${title}', pages=${pages}, category_id=${category_id}`,
    function(err, result) {
      res.redirect('/book')
    }
  )
})

app.get('/book/:id/edit', function(req, res) {
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

app.put('/book/:id', function(req, res) {
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

app.delete('/book/:id', function(req, res) {
  con.query(`DELETE FROM book WHERE id=${req.params.id}`, function(
    err,
    result
  ) {
    res.redirect('/book')
  })
})

app.get('/category', function(req, res) {
  con.query(`SELECT * FROM category`, function(err, result) {
    res.render('category/index', { categories: result })
  })
})

app.get('/category/create', function(req, res) {
  res.render('category/create')
})

app.post('/category', function(req, res) {
  const { name } = req.body
  con.query(`INSERT INTO category SET name='${name}'`, function(err, result) {
    res.redirect('/category')
  })
})

app.get('/category/:id/edit', function(req, res) {
  con.query(`SELECT * FROM category WHERE id=${req.params.id}`, function(
    err,
    result
  ) {
    res.render('category/edit', { category: result[0] })
  })
})

app.put('/category/:id', function(req, res) {
  const { name } = req.body
  con.query(
    `UPDATE category SET name='${name}' WHERE id=${req.params.id}`,
    function(err, result) {
      res.redirect('/category')
    }
  )
})

app.delete('/category/:id', function(req, res) {
  con.query(`DELETE FROM category WHERE id=${req.params.id}`, function(
    err,
    result
  ) {
    res.redirect('/category')
  })
})

app.listen(3000, function() {
  console.log('Server listening')
})
