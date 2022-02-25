import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}

export default connect;