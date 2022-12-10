const express = require("express");
const bodyParser = require("body-parser");

const assessmentRoutes = require("./routes/assessmentRoutes");
const companiesRoutes = require("./routes/companiesRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/assessment", assessmentRoutes);
app.use("/api/companies", companiesRoutes);

module.exports = app;