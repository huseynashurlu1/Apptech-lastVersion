const Contact = require('../models/contact');

const sendMessage = async(req, res) => {
    try {
        const message = await Contact.create(req.body)
        res.json(message)

      } catch (error) {
        console.error('Mesaj göndərilən zaman səhv baş verdi:', error);
        res.status(500).json({ error: 'Bir səhv baş verdi.', message: error.message });
    }
}

const getMessages = async(req, res) => {
    try {
        const messages = await Contact.find()
        res.json(messages)

      } catch (error) {
        console.error('Mesajlar gələn zaman səhv baş verdi:', error);
        res.status(500).json({ error: 'Bir səhv baş verdi.', message: error.message });
    }
}

// Delete Message
const deleteMessage = async (req, res) => {
  const { id } = req.params
  try {
      const message = await Contact.findByIdAndDelete(id);
      res.json(message);
  } catch (error) {
      throw new Error(error)
  }
}


module.exports = {sendMessage, getMessages, deleteMessage};