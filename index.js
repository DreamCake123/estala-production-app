const express = require('express');
const mongoose = require('mongoose');
const blueprintsRouter = require('./routers/blueprints')
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use('/blueprints', blueprintsRouter)

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Connected to database"));

app.listen(port, () => console.log("Server on"));