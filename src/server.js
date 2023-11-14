require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;

//config template engine
configViewEngine(app);

//Khai bao route
app.use("/", webRoutes);

//test connection
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("select * from Users u;", function (err, results, fields) {
  console.log("results=", results); // results contains rows returned by server
  console.log("fields=", fields); // fields contains extra meta data about results, if available
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
