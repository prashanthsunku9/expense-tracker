const express = require('express');
const path = require('path');
const mClient = require('mongodb').MongoClient;
const app = express();
const dotenv = require('dotenv').config(); //returns process.env object



mClient.connect(process.env.DB_URL) //MONGODB CONNECTION
  .then((client) => {
    const thedbO = client.db("thedb");// creating database obj

    const Tcoll = thedbO.collection('Tcoll'); //creating collection obj

    app.set('Tcoll', Tcoll);  // providing collection to app("key",value) 
    //so that it can be retrived during api with key

    console.log("database has started succesfully");

  }, (err) => {
    console.log("error has occured", (err.message));
  })


const Tapp = require('./routes/transactions');

app.use('/trans', Tapp);  //ROUTING TO API


app.use(express.static(path.join(__dirname, './client/build')));  //helps to connect to static react app


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));  //('*' matches with any string and gives html page as response)
})

app.use((req, res, next) => {
  res.send({ message: "path is invalid" })
})

app.use((error, req, res, next) => {
  res.send({ message: `error is ${error.message}` })
})



const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running in mode on port ${PORT}`));

