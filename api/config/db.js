import mongoose from "mongoose";

//Create a MongoDB Connection
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected`.bgCyan.white);
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Export

export default mongoDBConnect; 
