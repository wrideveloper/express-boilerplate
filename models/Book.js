const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  pages: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model("Book", bookSchema);
