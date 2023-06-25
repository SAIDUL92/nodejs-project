const User = require("./models/user");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// const mongoConnect = require("./util/database").mongoConnect;
const mongoose = require("mongoose");

const app = express();

const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

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

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000);
// });

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

    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
