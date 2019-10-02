'use strict';  

const express = require('express'); 
const path = require('path');

const app = express(); 

app.listen(process.env.PORT || 8000, () => {
    console.log('....SERVER RUNNING....');
});

