const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://i222615:2251193@web-lab11.okyyj.mongodb.net/BlogApp");
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;