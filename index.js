require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000

// Routes
const authRouter = require('./src/routes/auth.router')

app.use(cors())
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())

app.use('/api', authRouter)

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`)
})

