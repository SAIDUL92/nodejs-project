exports.error404 = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1] === 'true';
  res.status(404).render("404", {
    pageTitle: "shop",
    path: "/",
    isAuthenticated: 'isLoggedIn',
  });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
};
