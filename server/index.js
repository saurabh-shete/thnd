import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongoDB/connectDB.js'
import postRoutes from './routes/postRoutes.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/', postRoutes)

app.get('/', async (req, res) => {
  res.send('For testing purpose only')
})

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () =>
      console.log('Server has started on post http://localhost:8080')
    )
  } catch (error) {
    console.log(error)
  }
}
startServer()
