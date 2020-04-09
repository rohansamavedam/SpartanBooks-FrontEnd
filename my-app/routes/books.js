const router = require('express').Router();
let Book = require('../models/books.model');

router.route('/').get((req,res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {

    const username = req.body.username;
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    
const newBook = new Book({
    username,
    description,
    date
        
});

newBook.save()
.then(() => res.json('Book added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
    .then(books=> res.json(books))
    .catch(err => res.status(400).json(' Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(()=> res.json('book deleted.'))
    .catch(err => res.status(400).json(' Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id)
    .then(books => {
            books.username = req.body.username;
            books.description = req.body.description;
            books.date = Date.parse(req.body.date);

            books.save()
            .then(() => res.json('Book updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json(' Error: ' + err));
});




module.exports = router;
