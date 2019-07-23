const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OptionSchema = new Schema({
  answer: String,
  correct: { type: Boolean, default: false },
})

mongoose.model('option', OptionSchema)