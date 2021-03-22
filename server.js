require("dotenv").config();
const express = require("express");
const cors = require("cors");
const zametkyRouter = require("./zametky.routes");
const categoryRouter = require("./category.routes");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/", zametkyRouter, categoryRouter);

app.listen(PORT, () => {
  console.log(`... server started on port: ${PORT}`);
});
