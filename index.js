const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "./config/config.env") });
const PORT = process.env.PORT || 8000;
const cookieParser = require("cookie-parser");
const connect = require("./connection/databaseConnect");
const productRoute = require("./routes/productroutes");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoutes");
const paymentRoute = require("./routes/paymentRoutes");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const cloudinary = require("cloudinary").v2;

const fileUpload = require("express-fileupload");
const app = express();
let server;

app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(fileUpload());
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// handling uncaught ecxeption
process.on("uncaughtException", (err) => {
  console.log(`Error being ${err.message}`);
  console.log("Shutting down the server due to uncaught Exception ");

  process.exit(1);
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", paymentRoute);

// middleware for error
app.use(errorMiddleware);

// app.use(express.static(path.join(__dirname, "./dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./dist/index.html"));
// });
connect(process.env.DATABASE_NAME, process.env.DATABASE_PASSWORD)
  .then(() => {
    console.log("Connected to Database Successfully");
    server = app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((e) => console.log(e.message));

// unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error being ${err.message}`);
  console.log("Shutting down the server due to unhandle Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
