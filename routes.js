const express = require('express')
const router = express.Router()
const data = require('./data.json')
// const fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/results', (req, res) => {
  const inputData = req.query.Celeb

  const celeb = data.celebs.find(i => i.name === inputData)

  res.render('results', celeb)
})

// router.post('/', (req, res) => {
//   const inputData = req.body
//   // res.send(inputData)
//   if (inputData.Celeb === 'Kanye') {
//     res.redirect('/results')
//   }
// })

// router.post('/', (req, res) => {
//  const inputData = req.body
// if (inputData.Celeb === 'Kanye') {
// go to data.json celebs object === kanye
// display image1
// data.celebs.find

//     res.redirect('/results')
//   }
