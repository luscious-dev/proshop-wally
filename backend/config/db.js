import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB CONNECTION SUCCESSFUL: ${conn.connection.host}`);
  } catch (err) {
    console.log("SOMETHING WENT WRONG!", err.message);
    process.exit(1);
  }
};

export default connectDB;
