const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/express-boilerplate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongo"))
  .catch(err => console.log("err = " + err));
