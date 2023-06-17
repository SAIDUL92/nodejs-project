const path = require("path");

const express = require("express");
const app = express();

const mongoConnect = require('./utils/database').mongoConnect
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

mongoConnect(() => {

    app.listen(3000);

})


