const express=require('express');
const fs=require('fs')
const path=require('path');
const app =express();
const port=process.env.PORT;
const bodyparser=require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
//mongoose schema

const contect = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    massage: String,
    
  });

  const Contect = mongoose.model('contect',contect);

app.use('/static',express.static('static'))
app.use(express.urlencoded());


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})
app.get('/blog',(req,res)=>{
    res.status(200).render('index.pug');
})
app.get('/about',(req,res)=>{
    res.status(200).render('about.pug');
})
app.get('/contect',(req,res)=>{
    res.status(200).render('contect.pug');
})
app.get('/shop',(req,res)=>{
    res.status(200).render('shop.pug');
})

app.post('/contect',(req,res)=>{
    var mydata=new Contect(req.body);
    mydata.save().then(()=>{
        res.send("this item has send to database");
        
    }).catch(()=>{
        res.status(404).send("item was not saved to data")
    });
    res.status(200).render('contect.pug');
    
})


app.listen(port,()=>{
    console.log("application running on port 80");
})