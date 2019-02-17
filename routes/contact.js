// Name: Sanketkumar Vagadiya
// Id: 300991500 
// Date Feb 16 2019

let express = require("express");
let router = express.Router();
let contactModel = require('../models/contact');

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("contact/index", { title: "Contact" });
});

router.get("/sendcontact", (req, res, next) => {

    let newContact = contactModel({
        firstname: req.body.firstname,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    });

    contactModel.create(newContact, (err, contactModel) => {
        if (err) {
            console.log(err);
            res.end(err);

        } else {
            res.redirect('/');
        }
    });


    res.render("index", { title: "Send Contact" });

});




module.exports = router;
