const express = require('express')
const hbs = require('express-handlebars')
const server = express()

// Exports
module.exports = server

// Routers
const router = require('./routes')

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Routing
server.use('/', router)
server.use(express.static('public'))
