const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../dist")));
app.listen(3000, () => {
  console.log("server is listening on port 3000/5000/6000");
});
