const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products.model");
const productRoute = require("./routes/product.route.js");

//middle ware

// middle ware for json
app.use(express.json());

// middle ware for any type of data
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoute);

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// //update a product

// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not Found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// delete a product

// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletProduct = await Product.findByIdAndDelete(id);
//     if (!deletProduct) {
//       return res.status(404).json({ message: "No product found" });
//     }
//     res.status(200).json({ message: "Product Deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
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
