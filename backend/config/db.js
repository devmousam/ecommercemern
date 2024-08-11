import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB connected');
    } catch(error) {
        console.log(`DB connection failed - ${error}`)
    }
}

export default connectDB;