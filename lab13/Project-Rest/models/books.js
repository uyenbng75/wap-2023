let books = [
    {id: 1012, title: 'Don Quixote. Miguel de Cervantes', isbn: 5182376123, publishedDate: '12/03/2023', author: 'Alice'},
    {id: 7722, title: 'Ephemeral Echoes', isbn: 1234567890, publishedDate: '11/23/2019', author: 'Bob'}
];

//let randomId = Math.floor(Math.random() * 1000);

const ran = function generateRandomNumber(digits) {
    const min = 10 ** (digits - 1);
    const max = 10 ** digits - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    //get all books
    static getAllBooks() {
        return books;
    }

    //get book by id
    static getBookById(id) {
        return books.find(b => b.id == id);
    }

    //add new book
    addBook() {
        this.id = ran(4);
        this.isbn = ran(10);
        books.push(this);
    }

    updateBookById(id) {
        const index = books.findIndex(b => b.id == id);
        if (index > -1){
            this.id = id;
            books[index] = this;
        } else {
            throw new Error(`Book with ID: ${id} does not exist. Please enter again!`);
        }
    }

    static deleleBookById(id) {
        const index = books.findIndex(b => b.id == id);
        if (index > -1){
            this.id = id;
            books.splice(index,1);
        } else {
            throw new Error(`Book with ID: ${id} does not exist. Please enter again!`);
        }
    }
}