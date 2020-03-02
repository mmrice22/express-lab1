const express = require("express");
const cors = require("cors");
const app = express();
const port = 8888;
app.use(express.json());
const cartRoute = require("./routes.js");
app.use("/", cartRoute);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
