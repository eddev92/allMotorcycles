const express = require('express');
const path = require('path');
const app = express();
const mysql  = require('mysql');
// const cors = require('cors');
var bodyParser = require('body-parser')

// Connect and config database Mysql
app.use(bodyParser.json());



// app.use(cors());
// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
// app.use(morgan('dev'));
app.use(express.json());

var mysqlConnection = mysql.createConnection({
    // connectionLimit: 100000,
    connectTimeout  : 60 * 60 * 1000,
    // aquireTimeout   : 60 * 60 * 1000,
    // timeout         : 60 * 60 * 1000,
    host: 'localhost',
    user: 'pruebaMotor',
    password: 'llancaharo1',
    database: 'pruebaMotor',
    port:8080
 });

 
// Routes



// connect();
// Static Files
app.use(express.static(path.join(__dirname, 'public')));

 mysqlConnection.connect((error) => {
     if(!!error) {
         // mysqlConnection.end();
           console.log('_ERROR', error.stack);
       //   throw error;
       // return res.send(error)
     } else  {
         // setQuery();
         console.log('.:: Connection is successfully ::.');
         }

        });

       app.get('/roads', (req, res) => {
                mysqlConnection.query({sql: 'SELECT * FROM roads', timeout: 180000}, (error, rows, fields) => {
                     console.log('entro query')
                     if (error && error.code === 'PROTOCOL_SEQUENCE_TIMEOUT') {
                         console.log('_ERROR_QUERY :', error);
                        throw error;
                      }
                      
                        // console.log('RESPONSE ')
                        console.log('rows', rows);
                        console.log('res', res)
                        res.json(rows)
                        // console.log(fields);
                        // return res.json({
                        //     data: response
                        // })
                 });
    });

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });