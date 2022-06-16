const restaurants = require('./routes/restaurants');
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dbURL = 'mongodb+srv://holidayhype:gbcholidayhype@holidayhype.tcgnt9i.mongodb.net/holidayhype?retryWrites=true&w=majority'
mongoose.connect(dbURL)
.then((result) => console.log('Connected to MongoDB'))
.catch((error) => console.log(error))

app.use(express.json())
app.use('/api/restaurants', restaurants);
// require('./startup/prod')()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))









