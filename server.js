const express = require('express');
const app = express();
const db=require("./db");
const Forms=require("./models/formModel")
app.use(express.json());
const path=require('path')




const formsRoute=require("./routes/formRoute")

app.use('/api/forms/',formsRoute)

if(process.env.NODE_ENV ==='production'){

    app.use('/', express.static('client/build'))
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
  }


 
const port= process.env.PORT || 5000;
app.listen(port, ()=> 'server running on port') 