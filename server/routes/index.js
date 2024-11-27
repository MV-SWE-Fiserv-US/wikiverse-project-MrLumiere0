const express = require('express')
// const bodyParser = require('bodyParser')
const router = express.Router()

router.use(express.json())

// different model routers
router.use('/wiki', require('./wiki'))
router.use('/users', require('./users'))

module.exports = router
