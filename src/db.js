//m Módulo que permite concetar a mongodb
// pero tambien modelar los datos
import mongoose, { connect } from "mongoose";

// Crea una db cuando se inserte un datos

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/merndb");
        console.log(">>>DB is connected");
    } catch (error) {
        console.log("ERROR DB");
    }

};