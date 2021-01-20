"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const passportLocal = require("passport-local");
const app = express();
const auctionRoutes = require('./routes/auction');
const authRoutes = require('./routes/auth');

app.use('', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// CORS allowing 
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/api', auctionRoutes);
app.use('/api/authenticate', authRoutes);


// Server listening at 8000 port 
app.listen(8000, () => {
    console.log('Server is running!');
});
