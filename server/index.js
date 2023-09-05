const express = require('express');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = 5000 || 4000;
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')
const brandRoute = require('./routes/brand')
const orderRoute = require('./routes/order')
const userRoute = require('./routes/user')
const statRoute = require('./routes/statistics')
const viewStats = require('./viewStats');


const dbConnect = require('./config/connection');
dbConnect();

app.use(cors())
app.use(bodyParser.json())

app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use('/api/brand', brandRoute);
app.use('/api/order', orderRoute);
app.use('/api/user', userRoute);
app.use('/api/statistics', statRoute);

app.get('/', (req, res) => {
    viewStats.artir();
    res.send('Ana sayfa');
  });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

