const mongoose=require("mongoose");

var mongoURL= 'mongodb+srv://aelish:aelish2000@cluster0.plq0l.mongodb.net/yoga-form'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db=mongoose.connection

db.on('connected', ()=>{
    console.log(`database connected successfully`);
})

db.on('error',()=>{
    console.log(`database connection failed`)
})

module.exports=mongoose