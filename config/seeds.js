require('dotenv').load()
var mongoose = require('./database')

var Stylist = require('../models/stylist')


var stylists = [
  {
    email: 'michellebelle@gmail.com',
    username: "michelle123",
    password: 'pw123',
    services: ['123', '456'],
    appts: ['12321', '23432']

  },
  {
    email: 'sg@gmail.com',
    username: 'sarahg',
    password: 'pw123',
    services: ['12345', '67890'],
    appts: ['54321', '09876']
  }
];

Stylist.remove({}, function(err) {
  if (err) console.log(err);
  Stylist.create(stylists, function(err, stylists) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + stylists.length + " stylists.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
