require('dotenv').config();
const mongoose = require('mongoose');

const dbString = process.env.DB;

const connectDB = async () => {
    try {
        await mongoose.connect(dbString, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('Connected to Database....');
    } catch (error) {
        console.log('Error');
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
