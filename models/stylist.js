var mongoose = require('mongoose')

var stylistSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
  services: [{type:String}],
  appts: [{type:String}],
})

var Stylist = mongoose.model('Stylist', stylistSchema)

module.exports = Stylist
