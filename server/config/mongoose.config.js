const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI

const connectDB = async ()=>{
    try {
        await mongoose.connect(dbURI)
        console.log("Connected to MongoDB");
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        if (err.name === 'MongoNetworkError') {
            console.error('Network issue. Please check your internet connection.');
        } else if (err.name === 'MongoParseError') {
            console.error('There is an issue with the URI string.');
        } else if (err.message && err.message.includes('Authentication failed')) {
            console.error('Authentication failed. Please check your username and password.');
        } else {
            console.error('Unknown error:', err);
        }

        process.exit(1);
    }
}

module.exports = connectDB;