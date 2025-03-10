require('dotenv').config();
 
const express = require("express")
const cors = require('cors');
 
const mongoose = require("mongoose");
 
const app = express();
const port = process.env.PORT || 3000;
 
app.use(cors());
app.use(express.json());
 
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("polaczenia");
    })
    .catch((err) => {
        console.log("BLad polaczenia z mongo", err);
    })
 
const Product = mongoose.model("Product", new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
}))
 
app.get("/products", async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch (err){
        res.status(500).json({message: err.message});
    }
})
 
app.get("/products/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
 
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
 
        res.json(product);
    }catch (err){
        res.status(500).json({message: err.message});
    }
})
 
app.post("/products", async (req, res) => {
    try{
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        })
 
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    }catch (err){
        res.status(400).json({message: err.message});
    }
})
 
app.delete("/products/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
 
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
 
        await product.remove();
        res.json({message: "Product removed"});
    }catch (err){
        res.status(500).json({message: err.message});
    }
})
 
app.put("/products/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
 
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
 
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.category = req.body.category || product.category;
 
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    }catch (err){
        res.status(400).json({message: err.message});
    }
})
 
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})