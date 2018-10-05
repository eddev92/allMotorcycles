const express = require('express');
const path = require('path');
const app = express();
const mysql  = require('mysql');
var bodyParser = require('body-parser')

// Connect and config database Mysql
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'allMotorcyclesPeru',
    password: 'm5Wuxa0WqT2w2F9X',
    database: 'allMotorcyclesPeru'
});

mysqlConnection.connect((error) => {
    if(error) return console.log('ERROR', error);
    else console.log('.:: Connection is successfully ::.');
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

// app.get('/roads', (res, req) => {
//   mysqlConnection.query('SELECT * from roads', (error, response) => {
//     if (error) return console.log('ERROR: ', error)
//     else console.log('RESPONSE ', response)
//   });
// });

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
// app.use(morgan('dev'));
app.use(express.json());

// Routes
// app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;
