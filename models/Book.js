const con = require('../config/database')

module.exports = {
  find: function(callback) {
    con.query(
      `SELECT
        book.id, 
        book.title, 
        book.pages, 
        book.category_id,
        category.name AS category_name 
        FROM book JOIN category ON category.id = book.category_id`,
      callback
    )
  },

  findById: function(id, callback) {
    con.query(
      `SELECT
        book.id, 
        book.title, 
        book.pages, 
        book.category_id,
        category.name AS category_name 
        FROM book JOIN category ON category.id = book.category_id
        WHERE book.id = ${id}`,
      callback
    )
  },

  create: function(data, callback) {
    const { title, pages, category_id } = data
    con.query(
      `INSERT INTO book SET title='${title}', pages=${pages}, category_id=${category_id}`,
      callback
    )
  },

  update: function(id, data, callback) {
    const { title, pages, category_id } = data
    con.query(
      `UPDATE book SET 
        title='${title}', 
        pages=${pages},
        category_id=${category_id}
        WHERE id=${id}`,
      callback
    )
  },

  destroy: function(id, callback) {
    con.query(`DELETE FROM book WHERE id=${id}`, callback)
  }
}
