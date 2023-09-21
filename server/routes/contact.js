const express = require('express')
const router = express.Router()
const { sendMessage, getMessages, deleteMessage } = require('../controllers/contact');

router.post('/add', sendMessage)
router.get('/messages', getMessages)
router.delete('/:id', deleteMessage)

module.exports = router;

