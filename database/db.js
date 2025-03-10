const mongoose = require('mongoose')

const connectToDb = async() => {
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database successfully")
    } catch(e){
        console.log("Database connection failed")
        process.exit(1)
    }
}

module.exports = connectToDb