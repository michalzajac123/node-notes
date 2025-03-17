require("dotenv").config({path: "./config/.env"});
const express = require("express");
const mongoose = require("mongoose");
const carRoutes = require("./routes/CarRoute");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

//polaczenie z baza danych
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Połączono z bazą danych");
})
.catch(err=> console.log("Błąd połączenia z baza",err));
//dodanie router
app.use("/api", carRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {    
    console.log(`Serwer działa na porcie ${PORT}`);
})