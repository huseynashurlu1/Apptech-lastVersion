const express = require('express')
const router = express.Router()
const { addSeetings, getSettings, updateSettings } = require('../controllers/settings');

router.post('/add', addSeetings)
router.get('/all', getSettings)
router.put('/:id', updateSettings)

module.exports = router;

