const express = require('express');
const router = express.Router();


const createdatabase = require('../controllers/createdatabase')
router.post('/dynamicdatabase/createdatabase',createdatabase.createdatabase);



module.exports = router