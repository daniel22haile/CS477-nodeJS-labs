 const express = require('express');
 //  const bookController = require('../controllers/bookController');
 const bookContr = require('../controllers/bookController')
 const router = express.Router();

 router.get('/books', bookContr.getBookInfo); //this is middleware not fn call
 router.post('/books', bookContr.save);

 router.get('/books/:booId', bookContr.findBookById); //:bookd - indicates specific id for a book
 // we can retrive :booId using query string or req.params.booId
 //todo - req.params + whatever after : ==> req.params.booId
 //todo check on bookController

 router.put('/books/:booId', bookContr.update); //put is used for update or replace

 router.delete('/books/booId', bookContr.deleteById);

 module.exports = router;