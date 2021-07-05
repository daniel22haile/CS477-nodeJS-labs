const Book = require('../models/book'); //require the class

module.exports.getBookInfo = (res, req, next) => {
    res.status(200).json(Book.getAll()); //get the object in json format
}

exports.save = (req, res, next) => {
    //req.body --> {title: '', author: '',  ...}
    const data = req.body;
    const myBook = new Book(null, data.title, data.isbn, data.publishedDate, data.author);
    res.status(201).json(myBook.save());
}

exports.findBookById = (req, res, next) => {
    res.status(200).json(Book.getBookById(req.params.booId));
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.booId);
    res.status(200).end();
}

exports.update = (req, res, next) => {
    const book = req.body;

    const updatedBook = new Book(req.params.booId, book.title, book.isbn, book.publishedDate, book.author);
    res.status(200).json(updatedBook.update());
}