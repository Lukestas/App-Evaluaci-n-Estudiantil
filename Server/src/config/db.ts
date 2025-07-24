// Import de libreria de Mongoose para conectar a MongoDB
// Mongoose library import for connecting to MongoDB
import mongoose from "mongoose";

// Definir una funcion asincronica que realiza la conexion de la base de datos
// Define a asynchronous function for doing the conexion to the database
export const connectDB = async () => {
    try {
        
        // Obtiene la URI de conexión a MongoDB desde las variables de entorno
        // Get the URI from envieronment variable for connect to MongoDB
        const MONGO_URI=process.env.MONGO_URI as string

        // Intenta establecer conexion con la base de datos usando mongoose
        // Try to connect to the database using mongoose
        await mongoose.connect(MONGO_URI);
        console.log("💚 Se establecio conexion con la base de datos")
    } catch (err) {
        // Muestra un mensaje de error si no se puede conectar
        // Show a error message if the connection was failed
        console.error("💔 No se logro conectar a la base de datos: ", err)
    }
}