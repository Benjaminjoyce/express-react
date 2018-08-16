const express = require ("express");
const app     = express();

app.get('/',(req, res) =>{
    res.send("second change");
});


const PORT = process.env.PORT || 3000
app.listen(PORT);






//https://obscure-dusk-29323.herokuapp.com/
//https://git.heroku.com/obscure-dusk-29323.git