 const express = require('express')
 const app = express()
 const port = 5000

 
// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://root:<root>@cluster0.0vwpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("note-tuts").collection("blogs");
//   // perform actions on the collection object
//   client.close();
// });


const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://root:root@cluster0.0vwpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err =>console.log(err))

 app.get('/', (req, res) => res.send('Hello world 안녕하세요'))

 app.listen(port, ()=> console.log(`Example app listening on port ${port}`))

