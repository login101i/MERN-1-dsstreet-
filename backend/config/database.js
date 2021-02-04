require('dotenv').config();
const colors = require('colors')

const mongoose = require('mongoose');



const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_LOCAL_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB połączone z cluster em: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Błąd w połączeniu z mongoDB: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDatabase