import mongoose from "mongoose";
import { app, PORT } from "./app";

const start = async () => {
  // if(!process.env.JWT_KEY){
  //   throw new Error('JWT_KEY must be defined')
  // }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017");
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log(`App is listining!!! on http://localhost:${PORT}`);
  });
};

start();
