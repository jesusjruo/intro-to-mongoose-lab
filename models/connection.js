require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DBCONNECTION);


//Optional line of code to check if we have a connection to the db in the terminal.
mongoose.connection
    .on('open' , () => console.log('connected'))
    .on('close' , () => console.log('disconnected'))
    .on('error' , () => console.log('error:' , err));

module.exports = mongoose;