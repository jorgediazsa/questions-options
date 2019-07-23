const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OptionSchema = require('./option')

const QuestionSchema = new Schema({
  title: String,
  question: String,
  options: [OptionSchema]
})

const Question = mongoose.model('question', QuestionSchema)

module.exports = Question