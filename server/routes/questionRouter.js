const express = require('express')
const mongoose = require('mongoose')

const Question = require('../models/question')

const questionRouter = express.Router()

questionRouter
  .route('/')
    .get((req, res) => {
      Question.find({}, (err, questions) => {
        if (err) throw err
        res.json(questions)
      })
    })
    .post((req, res) => {
      Question.create(req.body, (err, question) => {
        if (err) throw err
        console.log('Question created!')
        var id = question._id

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the question with id: ' + id)
      })
    })

questionRouter
  .route('/:questionId')
    .get((req, res) => {
      Question.findById(req.params.questionId, (err, question) => {
          if (err) throw err
          res.json(question)
      })
    })
    .put((req, res) => {
      Question.findByIdAndUpdate(req.params.questionId, {
          $set: req.body
      }, {
          new: true
      }, (err, question) => {
          if (err) throw err
          res.json(question)
      })
    })
    .delete((req, res) => {
      Question.findByIdAndRemove(req.params.questionId, (err, question) => {
        if (err) throw err
        res.json(question)
      })
    })

module.exports = questionRouter