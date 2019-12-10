const Book = require("../models/Book");

module.exports = {
  index: function(req, res) {
    Book.find()
      .populate("category")
      .then(function(rows) {
        res.json(rows);
      });
  },

  show: function(req, res) {
    Book.findById(req.params.id)
      .populate("category")
      .then(function(row) {
        res.json(row);
      });
  },

  store: function(req, res) {
    Book.create(req.body).then(function(row) {
      res.json(row);
    });
  },

  update: function(req, res) {
    Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.json(row);
    });
  },

  destroy: function(req, res) {
    Book.findByIdAndDelete(req.params.id).then(function(row) {
      res.json(row);
    });
  }
};
