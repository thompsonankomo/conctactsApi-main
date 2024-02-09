const mongoose = require('mongoose');


//Contacts mongoose schema for queries
const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
});

module.exports = mongoose.model('Contacts', contactSchema);