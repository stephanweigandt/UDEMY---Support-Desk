const mongoose = require('mongoose')

const mongoURI = String(process.env.MONGO_URI)
console.log(mongoURI);
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
        
    }
}

module.exports = connectDB