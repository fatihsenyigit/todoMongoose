
'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000


require('dotenv').config()
require('express-async-errors')
require('./src/configs/dbConnection')()
app.use(express.json());



app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'welcome to the backend of the todo project'
    })
})

//routes
app.use('/todo', require("./src/routes/todoRouter"));


// middleware lari appUse ile kullan, ve errorhandler lari en sona koy
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, ()=> console.log('running at http://127.0.0.1'))