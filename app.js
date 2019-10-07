'use strict';  

const express = require('express'); 
const path = require('path');

const app = express(); 

app.listen(process.env.PORT || 8000, () => {
    console.log('....PORT 8000 SERVER RUNNING....');
});

app.use('/styles.css', express.static(path.join(__dirname, '/styles.css')));
app.use('/public', express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));

  
});