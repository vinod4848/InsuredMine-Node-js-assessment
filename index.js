const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const policyRoutes = require("./routes/policyRoutes");
const accountRoutes = require("./routes/userAccountRoutes");
const uploadRouter = require("./routes/dataRoutes");
const agentRoutes = require("./routes/agentRoutes");
const insuranceCarrierRoutes = require("./routes/carrierRoutes");

const database = require("./config/database");

const app = express();

app.use(bodyParser.json());

app.use("/file", uploadRouter);
app.use("/auth", authRoutes);
app.use("/policy", policyRoutes);
app.use("/account", accountRoutes);
app.use("/agents", agentRoutes);
app.use("/carriers", insuranceCarrierRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
