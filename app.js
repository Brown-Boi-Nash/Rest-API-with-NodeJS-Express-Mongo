const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsroute = require('./routes/posts')
app.use('/posts',postsroute)


//Routes
app.get('/',(req,res)=>{
    res.send('We are on home')
});


//Connect to DB
mongoose.connect(process.env.CONNECTION_URL,
{ useNewUrlParser: true , useUnifiedTopology: true},()=>
    console.log('Connected to DB'),
    );

app.listen(3000,()=>{
    console.log('Connected at port 3000')
});
