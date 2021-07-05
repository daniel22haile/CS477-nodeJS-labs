//todo - 1. dependencies
const express = require('express');
const bookRouter = require('./routes/bookRouter');
const cors = require('cors');

//todo - 2. instantiation
const app = express();
app.use(express.json());
app.use(cors());

//todo - 3. configurations
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');


//todo -4. middleware
app.use(express.json()); //this middleware is used to makesure -- req.body
app.use(bookRouter());

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});
app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});


//todo -7.bootup
// app.listen(PORT, () => console.log('Your server listening on port' + PORT));
app.listen(PORT, () => console.log('Your server listening on port' + PORT));