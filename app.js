const express = require('express');
const path = require('path');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const database = require('./models/userDatabase.js');


dotenv.config();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const routes_folder = "./routes/";

app.use('/', require(routes_folder + "login.js"));
app.use('/', require(routes_folder + "register.js"));

port = process.env.port || 3000;

database.connectToDatabase(app, port);








