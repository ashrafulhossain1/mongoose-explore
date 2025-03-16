const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    totalCopies: { type: Number, required: true },
    availableCopies: { type: Number, required: true },
    genre: { type: String, required: true },
    borrowedCount: { type: Number, default: 0 }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;