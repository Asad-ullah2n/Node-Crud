const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products.model");

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
