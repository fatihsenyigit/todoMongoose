

'use strict'

const {connect} = require('mongoose')

module.exports = () => {
    connect(process.env.MONGODB || "mongodb://localhost:27017/todoAPI")
      .then(() => console.log("db connected"))
      .catch(() => console.log("db not connected"));
}