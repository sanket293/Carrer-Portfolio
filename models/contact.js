let mongoose = require('mongoose');

// Name: Sanketkumar Vagadiya
// Id: 300991500 
// Date Feb 16 2019

let contactSchema = mongoose.Schema({
    firstname:String,
    lastName:String,
    email:String,
    phone:Number,
    message:String
},{
    collection :"contact"
});


module.exports= mongoose.model('contactSchema',contactSchema);