const mysql  = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

mysqlConnection.connect((error) => {
    if(error) return console.log('ERROR', error);
    else console.log('.:: Connection is successfully ::.');
});

