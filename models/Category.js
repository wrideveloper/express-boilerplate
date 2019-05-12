const con = require('../config/database')

module.exports = {
  find: function(callback) {
    con.query(`SELECT * FROM category`, callback)
  },

  findById: function(id, callback) {
    con.query(`SELECT * FROM category WHERE id = ${id}`, callback)
  },

  create: function(data, callback) {
    const { name } = data
    con.query(`INSERT INTO category SET name='${name}'`, callback)
  },

  update: function(id, data, callback) {
    const { name } = data
    con.query(`UPDATE category SET name='${name}' WHERE id=${id}`, callback)
  },

  destroy: function(id, callback) {
    con.query(`DELETE FROM category WHERE id=${id}`, callback)
  }
}
