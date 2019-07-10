const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,

  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = User = mongoose.model('users', UserSchema)