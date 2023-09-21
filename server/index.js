const express = require('express');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = 5000 || 4000;
const userRoute = require('./routes/user')
const contactRoute = require('./routes/contact')
const settingsRoute = require('./routes/settings')
const dbConnect = require('./config/connection');
dbConnect();

app.use(cors())
app.use(bodyParser.json())

app.use('/api/user', userRoute);
app.use('/api/contact', contactRoute);
app.use('/api/settings', settingsRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

