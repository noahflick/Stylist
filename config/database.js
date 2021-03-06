var mongoose = require('mongoose')
var dbUri = process.env.MONGOLAB_URI ||
            'mongodb://localhost/' + process.env.LOCAL_DB;

if (!process.env.MONGOLAB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}


mongoose.connect(dbUri)

module.exports = mongoose
