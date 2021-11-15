const mongoose = require("mongoose");

const formSchema= mongoose.Schema({
    firstname:{type: String ,require},
    lastname:{type: String ,require},
    email:{type: String ,require},
    city :{type: String ,require},
    zip :{type: Number ,require},
    age: {type: Number ,require},
    timings:{type: String ,require},
},{
    timestamps:true,
})

const formModel=mongoose.model('forms',formSchema);
module.exports=formModel