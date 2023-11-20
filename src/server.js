require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 3000;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

//Khai bao route
app.use("/", webRoutes);

//test connection

// simple query
connection.query("select * from Users u;", function (err, results, fields) {
  console.log("results=", results); // results contains rows returned by server
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
