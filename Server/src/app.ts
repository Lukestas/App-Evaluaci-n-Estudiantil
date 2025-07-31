import app from "./server/server.js"
import dotenv from 'dotenv'
import routes from "./routes/routes.js";

dotenv.config()

const port = process.env.PORT || 4000;

app.use("/api/v1", routes)

app.listen(port,()=>{
    console.log(`Server corriendo en : http://localhost:${port}`)
})