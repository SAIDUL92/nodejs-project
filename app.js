const User = require("./models/user");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set(session({secret:'my secrect',resave:false,saveUninitialized:false}));

app.use((req, res, next) => {
  User.findById("6495d9398baf80a1e0274ec8")
    .then((user) => {
      console.log("user", user);
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.3ku0kiu.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to DataBase");

    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "MOHAMMAD SAIDUL ISLAM",
          email: "saidul@gmail.com",
          cart: {
            items: [],
          },
        });

        user.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
