import mongoose from "mongoose"

const connectDb=async () => {
    try {
        if (!process.env.MONGODB_URL) {
            console.log("MONGODB_URL is missing in environment variables");
        }
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db error", error.message)
    }
}

export default connectDb