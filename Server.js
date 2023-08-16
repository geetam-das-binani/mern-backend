const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser=require('cookie-parser')
const connect = require("./connection/databaseConnect");
const productRoute = require("./routes/productroutes");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoutes");

const errorMiddleware = require("./middleware/error");
const app = express();
app.use(express.json());
dotenv.config({ path: path.join(__dirname, "./config/config.env") });
// handling uncaught ecxeption
process.on("uncaughtException", (err) => {
  console.log(`Error being ${err.message}`);
  console.log("Shutting down the server due to uncaught Exception ");

  process.exit(1);
});

connect(process.env.NAME, process.env.PASSWORD);
app.use(cookieParser())
app.use("/", productRoute);
app.use("/", userRoute);
app.use("/", orderRoute);

// middleware for error
app.use(errorMiddleware);




const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);

// unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error being ${err.message}`);
  console.log("Shutting down the server due to unhandle Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
