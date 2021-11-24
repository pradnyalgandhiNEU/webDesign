var mongoose = require("mongoose")


module.exports = mongoose.model("Sample",{

    email: {

        type: String,
        required: true,
        unique:true,
        default:''
        
    },
    password:{
        type: String,
        required: true
    }



})