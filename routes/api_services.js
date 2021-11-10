const express = require('express');
const router = express.Router();
const database = require('./database')
const dynamicdatabase = require('./dynamicdatabase')
const authentication = require('./authentication')
const static_api = require('./static_api')

router.use('/database', database)
router.use('/dynamicdatabase', dynamicdatabase)
router.use('/authentication', authentication)
router.use('/static_api/', static_api)












module.exports = router;