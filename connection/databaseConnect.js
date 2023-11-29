const mongoose = require("mongoose");
const connect = (name, password) =>
  mongoose.connect(
    `mongodb+srv://${name}:${password}@learnmongo.6pho3we.mongodb.net/`
  );


module.exports = connect;
