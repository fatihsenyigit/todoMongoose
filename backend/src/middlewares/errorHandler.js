
'use strict'

module.exports = (err, res, req, next) => {
    const statusCode = res.statusCode ?? 500
    console.log('errorHandler worked')
    return res.status(statusCode).send({
      error: true,
      message: err.message,
      cause: err.cause,
    });
}