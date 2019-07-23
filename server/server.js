const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const questionRouter = require('./routes/questionRouter')
// const optionRouter = require('./routes/optionRouter')

const app = express()

const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error))


app.use(bodyParser.json())

app.use('/question', questionRouter)
// app.use('/option', optionRouter)

module.exports = app