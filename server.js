const express = require("express");
const mongoose = require("mongoose");
const dbConf = require("./config/secret");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const authRoutes = require("./routes/authRoutes");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConf.url, { useNewUrlParser: true });

//MIDDLEWARES

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(logger('dev'));
app.use('/api/mychatapp', authRoutes);


app.listen(3000, () => {
    console.log("server express sur le port 3000");
})