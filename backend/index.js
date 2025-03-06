import express from "express"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import userRoute from "./routes/user.routes.js"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = 8080

connectDb();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.use("/api/v1/user", userRoute)

app.get("/", (req, res) => {
    res.send("Hello Server")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})