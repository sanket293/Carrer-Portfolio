let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" }); // this "index" is index.ejs of view folder
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About" });
});

// router.get("/projects", (req, res, next) => {
//   res.render("projects", { title: "Projects" });
// });

router.get("/services", (req, res, next) => {
  res.render("services", { title: "Services" });
});

// router.get("/contact", (req, res, next) => {
//   res.render("index", { title: "Contact" });
// });

module.exports = router;
