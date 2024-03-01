const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Node is runnig on port 3000");
});
mongoose
  .connect(
    "mongodb+srv://asadsunny2n:0Uuj3oMEzXryYqYI@nodecrud.xkhnvdw.mongodb.net/?retryWrites=true&w=majority&appName=NODECRUD"
  )
  .then(() => console.log("Connected to data base"))
  .catch(() => {
    console.log("data base connnection failed");
  });
