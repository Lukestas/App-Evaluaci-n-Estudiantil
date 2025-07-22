import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || '';
console.log(MONGO_URI)

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("💚 Conectado a la base de datos")
}).catch((err)=>{
    console.error("💔 Error al conectar a la base de datos: ", err)
})

app.get("/",(_req, res)=>{
    res.send("Servidor funcionando 🚀");
});

app.listen(PORT,()=>{
    console.log(`Servidor alojado en: http://localhost:${PORT}`)
})

