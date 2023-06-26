const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/TougthController')

router.get('/', ToughtController.showToughts)

module.exports = router