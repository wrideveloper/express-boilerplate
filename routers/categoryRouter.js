const express = require('express')
const router = express.Router()
const con = require('../config/database')

router.get('/', function(req, res) {
  con.query(`SELECT * FROM category`, function(err, result) {
    res.render('category/index', { categories: result })
  })
})

router.get('/create', function(req, res) {
  res.render('category/create')
})

router.post('/', function(req, res) {
  const { name } = req.body
  con.query(`INSERT INTO category SET name='${name}'`, function(err, result) {
    res.redirect('/category')
  })
})

router.get('/:id/edit', function(req, res) {
  con.query(`SELECT * FROM category WHERE id=${req.params.id}`, function(
    err,
    result
  ) {
    res.render('category/edit', { category: result[0] })
  })
})

router.put('/:id', function(req, res) {
  const { name } = req.body
  con.query(
    `UPDATE category SET name='${name}' WHERE id=${req.params.id}`,
    function(err, result) {
      res.redirect('/category')
    }
  )
})

router.delete('/:id', function(req, res) {
  con.query(`DELETE FROM category WHERE id=${req.params.id}`, function(
    err,
    result
  ) {
    res.redirect('/category')
  })
})

module.exports = router
