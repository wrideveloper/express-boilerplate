const Category = require("../models/Category");

module.exports = {
  index: function(req, res) {
    Category.find().then(function(rows) {
      res.json(rows);
    });
  },

  show: function(req, res) {
    Category.findById(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  store: function(req, res) {
    Category.create(req.body).then(function(row) {
      res.json(row);
    });
  },

  update: function(req, res) {
    Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.json(row);
    });
  },

  destroy: function(req, res) {
    Category.findByIdAndDelete(req.params.id).then(function(row) {
      res.json(row);
    });
  }
};
