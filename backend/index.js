
'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000


require('dotenv').config()
require('express-async-errors')
require('./src/configs/dbConnection')()

app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'welcome to the backend of the todo project'
    })
})

app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, ()=> console.log('running at http://127.0.0.1'))