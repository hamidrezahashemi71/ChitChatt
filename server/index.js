const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.js')

const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config() // to call our env vars inside node app

app.use(cors()) // middleware allow to cross origin requests
app.use(express.json()) // middleware allow to pass json payloads from frontend to backend
app.use(express.urlencoded())

// ROUTES
app.get('/', (req, res) => res.send("Hello World"))
app.use('/auth', authRoutes)

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
