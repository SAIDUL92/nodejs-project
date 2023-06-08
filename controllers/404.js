exports.error404 = (req, res, next) => {
    res.status(404).render('404',{
     
      pageTitle:'shop',
      path:'/',
  
    });
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  }