// Import del framework de express para crear el servidor web
import express from 'express';

// Import de dotenv para leer variables de entorno desde el archivo .env
import dotenv from "dotenv";

// Import de la funcion que realiza la conexion con la base de datos MongoDB
import { connectDB } from './config/db.js';

// Carga de las variables de entorno definidas en el archivo .env
dotenv.config();

// Creacion de una instancia de la aplicacion express
const app = express();

// Obtencion del puerto desde las variables de entorno
const PORT = process.env.PORT as string;

// Llamada de la funcion encargada de la conexion con la base de datos MongoDB
connectDB();

// Ruta base de prueba para verificar que el servidor esta corriendo
app.get("/",(_req, res)=>{
    res.send("Servidor funcionando 🚀");
});

// Iniciacion del servidor en el puerto definido y mostrado por consola
app.listen(PORT,()=>{
    console.log(`Servidor alojado en: http://localhost:${PORT}`)
})