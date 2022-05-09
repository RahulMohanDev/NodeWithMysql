const express = require("express");
const http = require("http");
const path = require("path");
let bodyParser = require("body-parser");
let adminRouter = require("./Routes/admin");
let userRouter = require("./Routes/user");
const { route } = require("./Routes/user");
const obj = require("./Controllers/adminController");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", (req, res, next) => {
//   console.log("this is some other transformation");
//   console.dir(obj);
//   next();
// });

app.set("view engine", "ejs");

app.use(userRouter);

app.use("/admin", adminRouter);

app.listen(8000);
http.createServer(app);
