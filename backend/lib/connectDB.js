import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is connected..")

  }
  catch (e) {
    console.log(e);
  }
}


export default connectDB;