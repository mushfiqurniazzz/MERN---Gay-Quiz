import mongoose from "mongoose";
mongoose.set("strictQuery", false);
export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}