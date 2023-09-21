const Settings = require('../models/settings');

const addSeetings = async(req, res) => {
    try {
        const text = await Settings.create(req.body)
        res.json(text)

      } catch (error) {
        console.error('Səhv baş verdi:', error);
        res.status(500).json({ error: 'Bir səhv baş verdi.', message: error.message });
    }
}

const getSettings = async(req, res) => {
    try {
        const text = await Settings.find()
        res.json(text)

      } catch (error) {
        console.error('Səhv baş verdi:', error);
        res.status(500).json({ error: 'Bir səhv baş verdi.', message: error.message });
    }
}

const updateSettings = async (req, res) => {
  try {
      const updatedSettings = req.body;
      await Settings.findOneAndUpdate({}, updatedSettings);
      res.json(updatedSettings);
  } catch (error) {
      console.error('Səhv baş verdi:', error);
      res.status(500).json({ error: 'Bir səhv baş verdi.', message: error.message });
  }
};

module.exports = {addSeetings, getSettings, updateSettings };