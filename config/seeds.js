require('dotenv').load()
var mongoose = require('./database')

var User = require('../models/user')
// var Client = require('../models/client')
// var Appt = require('../models/appt')


var users = [
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

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length + " users.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

// Client.remove({}, function(err) {
//   if (err) console.log(err);
//   Client.create(clients, function(err, clients) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + clients.length + " clients.");
//       mongoose.connection.close();
//     }
//     process.exit();
//   });
// });
