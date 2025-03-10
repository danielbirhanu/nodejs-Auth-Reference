require('dotenv').config()
const express = require('express')
const connectToDb = require('./database/db')

connectToDb()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => (
    console.log(`Server running successfully on port ${PORT}`)
))