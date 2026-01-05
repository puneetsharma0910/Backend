import mongoose from "mongoose";
const databaseName = "newOne";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log("Db Connected");
    console.log("Host is : ", connectionInstance.connection.name);
  } catch (error) {
    console.log("not connected ", error);
    process.exit(1)
  }
};

export default connectDb;
