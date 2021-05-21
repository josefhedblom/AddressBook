const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    profile_img: {
        type: String,
    }
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;