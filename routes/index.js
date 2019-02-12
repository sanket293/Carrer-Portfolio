let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Sanket Vagadiya" }); // this "index" is index.ejs of view folder
});

router.get("/about", (req, res, next) => {
  res.render("index", { title: "About" });
});

router.get("/contact", (req, res, next) => {
  res.render("index", { title: "Contacts" });
});

router.get("/products", (req, res, next) => {
  res.render("index", { title: "Products" });
});

router.get("/services", (req, res, next) => {
  res.render("index", { title: "Services" });
});

module.exports = router;
