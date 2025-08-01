import app from "./server/server.js"
import dotenv from 'dotenv'
import routes from "./routes/routes.js";
import { connectDB } from "./config/mongoDB.js";

dotenv.config()

connectDB()

const port = process.env.PORT || 4000;

app.use("/api/v1", routes)

app.listen(port,()=>{
    console.log(`Server running on: http://localhost:${port}`)
})