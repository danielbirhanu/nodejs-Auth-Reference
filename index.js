require('dotenv').config()
const express = require('express')
const connectToDb = require('./database/db')
const authRoute = require('./routes/Auth-routes')
const homeRoute = require('./routes/home-routes')
const adminRoute = require('./routes/admin-routes')

connectToDb()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/home', authRoute)
app.use('/api/admin', authRoute)

app.listen(PORT, () => (
    console.log(`Server running successfully on port ${PORT}`)
))