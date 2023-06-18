const path = require("path");
const express = require("express");
const dotenv = require('dotenv')
const app = express();
const { MongoClient } = require('mongodb');

dotenv.config()
console.log(process.env.mongodb);
// const MongoDbConnect = require('./utils/database').mongoDbConnect;

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const errorControler = require('./controllers/404')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(errorControler.error404);


app.listen(3000);


