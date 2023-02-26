const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const port = process.env.PORT;
const url = process.env.MONGO_URI;

mongoose.set('strictQuery', true);
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error Connecting to database", err);
})

app.get('/test', (req,res) => {
    res.json('express server test ~ OK');
})

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});