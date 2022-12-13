const mongoose = require("mongoose");

require('dotenv').config({ path: '.env' });

const mongoURI = process.env.NODE_MONGO_URI;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`1 Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB };