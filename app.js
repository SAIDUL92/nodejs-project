const User = require("./models/user");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");
const session = require("express-session");
const csrf = require("csurf");
const MongoDBStore = require("connect-mongodb-session")(session);
const MONGODB_CONNECTION_STRING =
  "mongodb+srv://root:root@cluster0.3ku0kiu.mongodb.net/shop?retryWrites=true&w=majority";
const app = express();
const store = new MongoDBStore({
  uri: MONGODB_CONNECTION_STRING,
  collection: "session",
});

const csrfProtecttion = csrf();
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secrect",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(csrfProtecttion);
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
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
  .connect(MONGODB_CONNECTION_STRING)
  .then((result) => {
    // User.findOne().then((user) => {
    //   if (!user) {
    //     const user = new User({
    //       name: "MOHAMMAD SAIDUL ISLAM",
    //       email: "saidul@gmail.com",
    //       cart: {
    //         items: [],
    //       },
    //     });

    //     user.save();
    //   }
    // });

    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
