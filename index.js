const express = require ("express");
const mongoose = require ("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require('./config/keys');
require('./models/user'); 
require('./services/passport'); 

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);





//https://obscure-dusk-29323.herokuapp.com/
//https://git.heroku.com/obscure-dusk-29323.git

//has to use requre import not working syntax error??
// import {googleClientID} from "./config/keys";
// import {googleClientSecret} from "./config/keys";