const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const sym = require('./Routes/symp');
const login = require('./Routes/login');
const register = require('./Routes/register');
const comp=require('./Routes/comp');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("Home route")
}
)
app.use('/symp', sym);
app.use('/login', login);
app.use('/register',register);
app.use('/comp',comp);

module.exports = app;