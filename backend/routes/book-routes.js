const express = require("express")
const booksController = require("../controllers/booksController")
const router = express.Router()
const Book = require('../models/BookModel')


router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)
router.get('/:id', booksController.getById)
router.put('/:id',booksController.updateBook)
router.delete('/:id',booksController.deleteBook)


module.exports = router;