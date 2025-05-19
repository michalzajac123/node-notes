const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/ads",(req,res)=>{
    const ad = req.body;
    console.log("Otrzymano ogłoszenie ", ad);
    res.status(201).json({message: "Ogłoszenie dodane do bazy", data: ad})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
