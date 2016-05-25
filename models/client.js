var mongoose = require('mongoose')

var clientSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
  pastSvc: [{type:String}],
  appts: [{type:String}],
})

var Client = mongoose.model('Client', clientSchema)

module.exports = Client
