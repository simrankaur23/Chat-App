const path = require('path');

// Express-package
const express = require('express');

// Path to public folder
const publicPath = path.join(__dirname, '/../public');

// For port
const port = process.env.PORT || 3000;

var app = express();

// For public folder
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is running on ${port} port`)
})