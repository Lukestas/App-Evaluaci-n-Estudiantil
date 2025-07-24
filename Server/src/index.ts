// Import del framework de express para crear el servidor web
// Framework express import to create the web server
import express from 'express';

// Import de dotenv para leer variables de entorno desde el archivo .env
// dotenv import to read environment variable from .env file
import dotenv from "dotenv";

// Import de la funcion que realiza la conexion con la base de datos MongoDB
// Function Import to connect to MongoDB data base
import { connectDB } from './config/db.js';

import userRoutes from "./routes/userRoutes.js"


// Carga de las variables de entorno definidas en el archivo .env
// Load environment variable in .env file
dotenv.config();

// Creacion de una instancia de la aplicacion express
// Instance creation for express application
const app = express();

// Habilita leer JSON del body
// Enable read JSOn from body
app.use(express.json())

// Obtencion del puerto desde las variables de entorno
// Get the port from environment variables
const PORT = process.env.PORT as string;

// Llamada de la funcion encargada de la conexion con la base de datos MongoDB
// Function call to do the connection to the MongoDB data base 
connectDB();

// Ruta base de prueba para verificar que el servidor esta corriendo
// Base Route to check if the server is working
app.get("/",(_req, res)=>{
    res.send("Servidor funcionando 🚀");
});

app.use("/api/users", userRoutes);

// Iniciacion del servidor en el puerto definido y mostrado por consola
// Server startup on the defined port and display on the console
app.listen(PORT,()=>{
    console.log(`Servidor alojado en: http://localhost:${PORT}`)
})