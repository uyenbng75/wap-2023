const express = require('express');
const bookController = require('../controllers/book-controller');
const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBookById);
router.delete('/:id', bookController.deleleBookById);

module.exports = router;

