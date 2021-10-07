const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(helmet());

const indexRoute = require('./routes/index');
const dataRoute = require('./routes/data')

app.use('/home', indexRoute);

app.use('/data', dataRoute);

app.use('/', (req, res, next) => {
    res.redirect('/home');
});

console.log('listening');


const Event = require('./model/event');

app.listen(process.env.PORT || 3000);

