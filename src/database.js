import mongoose from "mongoose";
mongoose.connect("mongodb+srv://brayan:brayan1@cluster0.4u145.mongodb.net/schoolcontroldb?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected to MongoDB"))
.catch((error)=>console.log("Error connecting to MongoDB", error));

export default mongoose;