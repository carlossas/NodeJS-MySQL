const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Importar rutas
var usersRoutes = require('./routes/users');
var appRoutes = require('./routes/app');

//HEADER
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS ")
    next();
});

// Middlewares
app.use(express.json());

// Routes
app.use('/users', usersRoutes);
app.use('/', appRoutes);




// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});