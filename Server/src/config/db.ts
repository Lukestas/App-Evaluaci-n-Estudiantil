import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const MONGO_URI=process.env.MONGO_URI as string
        await mongoose.connect(MONGO_URI);
        console.log("💚 Se establecio conexion con la base de datos")
    } catch (err) {
        console.error("💔 No se logro conectar a la base de datos")
    }
}