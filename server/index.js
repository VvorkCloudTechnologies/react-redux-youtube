const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/data", (req, res) => {
  res.send("hello from /data");
  // res.send();
});

app.get("/api", (req, res) => {
  res.json({
    name: "anees",
    age: "20",
    address: "lahore"
  });
  app.get("/users", (req, res) => {
    res.sendFile(users.html);
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is listening on port 3000/5000/6000");
});
