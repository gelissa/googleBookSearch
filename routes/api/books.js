const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

// match this with /api/books
router.route('/')
    .get(booksController.getBooks)
    
// api/books post
router.route("/")
    .post(booksController.create)

//  api/books/:id
router.route("/:id")
    .delete(booksController.remove)
    
router.route("*")
    .get("client/build/index.html");

module.exports = router;