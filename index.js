const express = require('express');
const mongoose = require('mongoose');

const productionsRouter = require('./routers/productions')
const submissionRouter = require('./routers/submission')

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/browse', productionsRouter)
app.use('/submit', submissionRouter)
app.use(express.static('public'));
app.listen(port, () => console.log("Server on"));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Connected to database"));

