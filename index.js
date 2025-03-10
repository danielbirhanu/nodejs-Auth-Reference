require('dotenv').config()
const express = require('express')
const connectToDb = require('./database/db')
const authRoutes = require('./routes/Auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uploadImageRoutes = require('./routes/image-routes')

connectToDb()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => (
    console.log(`Server running successfully on port ${PORT}`)
))