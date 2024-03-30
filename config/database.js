import mongoose from 'mongoose';

let connected = false;

const connectDatabase = async () => {
  // only fields specified in schema will be saved in database if strictQuery is true
  mongoose.set('strictQuery', true);
  // if connected to MongoDB, don't connect again
  if (connected) {
    console.log('MongoDB is already connected.');
    return;
  }
  // connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB is connected.');
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
