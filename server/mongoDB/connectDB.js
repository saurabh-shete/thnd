import mongoose from 'mongoose'

const connectDB = URL => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected to the database.'))
    .catch(error => console.error())
}

export default connectDB
