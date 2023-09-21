const mongoose = require('mongoose'); 

var settingsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    bannerText:{
        type:String,
        required:true,
    },
    aboutText:{
        type:String,
        required:true,
    },
    contactText:{
        type:String,
        required:true,
    },
    footerText:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Settings', settingsSchema);