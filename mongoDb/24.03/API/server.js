const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: "./config/.env"});

const userRoutes = require("./routes/userRoutes");

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => {
        console.log("Błąd połączenia z baza ",err)
        process.exit(1);
    });
const app = express();

app.use(cors());
app.use(express.json());    

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));