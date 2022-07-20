const express = require('express')
const bodyParser = require('body-parser')
const restaurant = require('./routes/restaurant')
const mealtypes = require('./routes/mealtype')
const menu = require('./routes/menu')
const payment = require('./routes/payment')
const mongoose = require('mongoose')
const cors = require('cors')
//connect with MongoDB

mongoose.connect(
    'mongodb://localhost/codejava',
    ()=>{
    console.log('MongoDB connected')
},e=>console.log(e))




var app = express()
const port = 7070;
app.use(bodyParser.json())
app.use(cors())
app.use('/restaurant',restaurant)
app.use('/mealtypes',mealtypes)
app.use('/menu',menu)
app.use('/pay',payment)
//Try to include MVC
app.listen(port,()=>{
    console.log('listening on port' ,port);
    
});
