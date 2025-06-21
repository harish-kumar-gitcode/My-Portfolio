require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3700 || 3500;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../Assets')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(PORT, (err)=>{
    if(!err)
        console.log('App is running on Port: ', PORT)
    else
    console.log('Error:', err)
})