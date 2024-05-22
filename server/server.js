import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './router/userRoute.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/userData',userRoutes)

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT

mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on the port ', PORT, '✅');
    })
}).catch((err) => {
    console.log('Error Connecting the database', err);
})