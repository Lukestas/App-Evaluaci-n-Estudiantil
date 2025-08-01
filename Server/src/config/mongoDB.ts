// Mongoose library import for connecting to MongoDB
import mongoose from "mongoose";

// Define a asynchronous function for doing the connection to the database
export const connectDB = async () => {
    try {

        // Get the URI from environment variable for connect to MongoDB
        const MONGO_URI=process.env.MONGO_URI as string

        // Try to connect to the database using mongoose
        await mongoose.connect(MONGO_URI);
        console.log("💚 The database connection was successful")
    } catch (err) {
        // Show a error message if the connection was failed
        console.error("💔 The database connection failed: ", err)
    }
}