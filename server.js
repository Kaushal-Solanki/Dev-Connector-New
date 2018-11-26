const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const users = require('./routes/api/users')
const post = require('./routes/api/post')
const profile = require('./routes/api/profile')


const app = express();

//Body Parser Middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//db config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connect'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello world'))

//USE Routes

app.use('/api/users', users);
app.use('/api/post', post);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is runing on ${port}`));