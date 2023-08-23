const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const policyRoutes = require("./routes/policyRoutes");
const accountRoutes = require("./routes/userAccountRoutes");
const database = require("./config/database");

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/policy", policyRoutes);
app.use("/account", accountRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
