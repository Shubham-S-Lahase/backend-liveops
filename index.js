const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const port = process.env.PORT;
const url = process.env.MONGO_URI;

app.use(express.json());
app.use(cors({ credentials: true, origin: "https://localhost:3000" }))

mongoose.set('strictQuery', true);
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error Connecting to database", err);
})

app.get('/test', (req,res) => {
    res.json('express server test ~ OK');
})

app.use('/api/user', registerRoute);
app.use('/api/user', loginRoute);

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});