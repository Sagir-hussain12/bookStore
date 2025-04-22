import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;
        await mongoose.connect(dbURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}