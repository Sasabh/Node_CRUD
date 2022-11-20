//-----------------------------------------------------------------------------------------------------------------------
//Import Libraries
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
//-----------------------------------------------------------------------------------------------------------------------
//Configuration/Settings

dotenv.config({ path: 'config.env' });
const app = express();

//-----------------------------------------------------------------------------------------------------------------------
// MiddleWares

app.use(morgan('tiny')); //Log request with return ms
app.use(bodyparser.urlencoded({ extended: true })); //Parse request to body parser
app.set('view engine', 'ejs'); //Set View Engine
// app.set("views",path.resolve(__dirname, "views/ejs"));
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/images', express.static(path.resolve(__dirname, 'assets/images')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
//-----------------------------------------------------------------------------------------------------------------------
//Variables Setup

const PORT = process.env.PORT || 3000;
//-----------------------------------------------------------------------------------------------------------------------
// Functionality Implementation

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//-----------------------------------------------------------------------------------------------------------------------
