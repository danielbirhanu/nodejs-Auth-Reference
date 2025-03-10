require('dotenv').config()
const express = require('express')
const connectToDb = require('./database/db')
const authRoute = require('./routes/Auth-routes')

connectToDb()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/auth', authRoute)

app.listen(PORT, () => (
    console.log(`Server running successfully on port ${PORT}`)
))