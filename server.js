const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


let cors = require('cors');

const usersController = require('./controllers/usersController');
const permissionsController = require('./controllers/permissionsController');
const membersController = require('./controllers/membersController');
const subscriptionsController = require('./controllers/subscriptionsController');
const moviesController = require('./controllers/moviesController');
const authControler = require('./controllers/authController');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.use('/api/users', usersController)
app.use('/api/permissions', permissionsController)
app.use('/api/members', membersController)
app.use('/api/subscriptions', subscriptionsController)
app.use('/api/movies', moviesController)
app.use('/api/auth', authControler)


require('./config/database');

app.listen(process.env.PORT || 9000);