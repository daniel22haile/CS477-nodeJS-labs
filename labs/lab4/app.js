//todo - 1. dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const prodRouter = require('./routes/product');
const userRouter = require('./routes/users');


//todo - 2. instiations
const app = express();

//todo - 3. configurations
//--> for port number
app.set('port', process.env.PORT || 4000);
const PORT = app.get('port');
app.set('query parser', 'extended'); //default case


//todo 4. middleware
app.get('/', (req, res, next) => {
    res.send('This is my home page...');
});
app.use('product', prodRouter);
app.use('users', userRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));


//todo - ERROR 404
app.use((req, res, next) => {
    res.sendFile(path.join__dirname, 'views', '404.html');
});

//todo - ERROR 500
app.use((err, req, res, next) => {
    console.log(err);
    res.sendFile(path.join(__dirname, 'views', '500.html'));
});



//todo - 7. bootup routes
app.listen(PORT, () => console.log('Your server is on ' + PORT));