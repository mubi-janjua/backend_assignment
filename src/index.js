const setupDb = require('../db/db-setup');
const express = require('express');
const Router = require('./router/routers')

// set up database with objection and knex
setupDb();

const app = express();
app.use(express.json());

app.use(Router);

app.listen(3000, () => console.log('server is running on port 3000'));
