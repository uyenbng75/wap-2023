const Book = require('../models/books');


exports.getAllBooks = (req,res,next) => {
    res.json(Book.getAllBooks());
}

exports.getBookById = (req,res,next) => {
    res.json(Book.getBookById(req.params.id));
}

exports.addBook = (req,res,next) => {
    const book = new Book(null, req.body.title, null, req.body.publishedDate, req.body.author).addBook();
    res.status(201).end('New book added!');
}

exports.updateBookById = (req,res,next) => {
    const book = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    console.log(book);
    book.id = req.params.id;
    book.updateBookById(req.params.id);
    res.status(200).json(book);
}

exports.deleleBookById = (req, res, next) => {
    Book.deleleBookById(req.params.id);
    res.status(200).end('Book deleted');
}