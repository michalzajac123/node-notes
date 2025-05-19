const express = require('express');
const connectDB = require('./config/db');
const AdRoutes = require('./routes/AdRoutes');
require('dotenv').config({path: './config/.env'});

const app = express();

connectDB();

app.use(express.json());

app.use("/api", AdRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
