const express = require('express')
const router = express.Router()
// const data = require('./data.json')
// const fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  res.render('partials/home')
})

router.get('/results', (req, res) => {
  res.render('partials/results')
})

router.post('/', (req, res) => {
  const inputData = req.body
  // res.send(inputData)
  if (inputData.Celeb === 'Kanye') {
    res.redirect('/results')
  }
})
