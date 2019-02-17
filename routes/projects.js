// Name: Sanketkumar Vagadiya
// Id: 300991500 
// Date Feb 16 2019

let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("projects/index", { title: "Projects" }); 
});

router.get("/success-quotes", (req, res, next) => {
  res.render("projects/successquotes", { title: "Success Quotes" }); 
});


router.get("/womb-to-world", (req, res, next) => {
  res.render("projects/wombtoworld", { title: "Womb to World" }); 
});


router.get("/sudoku", (req, res, next) => {
  res.render("projects/sudoku", { title: "Sudoku" }); 
});


module.exports = router;
