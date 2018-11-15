const Sequelize = require('sequelize');
const express = require('express');
const path = require('path');
const lodash = require("lodash");
const app = express();
const bodyParser = require('body-parser')
const apiRoads = require('./routes/routes-roads');
const db = require('../models');

// app.use(express.json());
// const cors = require('cors');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader("content-Type", "application/json");
    next();
    });
db.sequelize
  .authenticate()
  .then(() => {
    console.log('CONEXION EXITOSA A LA BASE DE DATOS');
  })
  .catch(err => {
    console.error('_ERROR Unable to connect to the database:', err);
  });
// Connect and config database Mysql
// Settings 
app.set('port', process.env.PORT || 3000);
// poblar tabla roads
db.sequelize.sync().then(() => {
    db.roads.bulkCreate({
                names: '',
                destinity: '',
                dateSal: '',
                dateReturn: '',
                point: '',
                city: ''
        })
});

apiRoads(app, db);
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });