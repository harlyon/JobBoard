const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const port = process.env.Port || 9000


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

const Users = require('./routes/user')
app.use('/users', Users)

const mongoURI = 'mongodb://harry:harry24680@ds133630.mlab.com:33630/testing'
mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))


app.listen(port, () => {
  console.log('Server is Running on' + - port);
})