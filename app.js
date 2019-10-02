'use strict';  

const express = require('express'); 
const path = require('path');

const app = express(); 

app.listen(process.env.PORT || 8000, () => {
    console.log('....SERVER RUNNING....');
});

app.use('/styles.css', express.static(path.join(__dirname, '/styles.css')));
app.use(express.static(__dirname + '/public/images'));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});