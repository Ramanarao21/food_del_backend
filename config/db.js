import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://RamanaRao:Ramanarao2111@cluster0.hpwepqh.mongodb.net/food-del').then(() => console.log("DB connected"));
} 

    