const mongoose = require('mongoose');
const loanSchema = new mongoose.Schema({
    // foreign data
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },

    // own data
    borrowDate: { type: Date, default: Date.now },
    returnDate: { type: Date, default: null },
    status: { type: String, default: 'borrowed', enum: ['borrowed', 'returned'] }
})
const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;