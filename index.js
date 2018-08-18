const express = require ("express");
require('./services/passport');

//has to use requre import not working syntax error??
// import {googleClientID} from "./config/keys";
// import {googleClientSecret} from "./config/keys";

const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);






//https://obscure-dusk-29323.herokuapp.com/
//https://git.heroku.com/obscure-dusk-29323.git