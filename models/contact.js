let mongoose = require('mongoose');



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