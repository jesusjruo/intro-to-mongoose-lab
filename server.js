require('dotenv').config();
const express = require('express');
const Customer = require('./models/customer');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json()); //middleware to use JSON
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/customers' , async(req , res) => {
    try{
        res.json(await Customer.find({}));
    }catch (err) {
        res.status(400).json(err);
    }
});

app.post('/customers' , async(req , res) => {
    try{
        req.body.age = Number(req.body.age);
        res.json(await Customer.create(req.body));
    }catch (err) {
        res.status(400).json(err);
    }
});

app.delete('/customers/delete-customer/:id' , async(req , res) => {
    try{
        res.json(await Customer.findByIdAndDelete(req.params.id));
    }catch (err) {
        res.status(400).json(err);
    }
});

app.put('/customers/:id' , async (req, res) => {
    try {
        res.json(await Customer.findByIdAndUpdate(req.params.id , req.body));
    }catch (err) {
        res.status(400).json(err);
    }
});


app.listen(process.env.PORT , () => {
    console.log(`Live on port: ${process.env.PORT}`);
});