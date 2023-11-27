const mongoose = require("mongoose");
const connect = (name, password) =>
  mongoose.connect(
    `mongodb+srv://${name}:${password}@learnmongo.6pho3we.mongodb.net/`
  );

// no need to use catch since we are handling Unhandled Promise Rejection in Server.js

module.exports = connect;
