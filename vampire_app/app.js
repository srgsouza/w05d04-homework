// 1. Require your node modules
// const express = require('express');
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');  // this is the model/schema
const vampireList = require('./populateVampires');  // initial data / list of vampires

// 3. Connect your database and collection name
const db = mongoose.connection;

// 4. Open your mongoose connection
const url = 'mongodb://localhost:27017/vampires';
mongoose.connect(url, { useNewUrlParser: true })

db.on('error', (err) => {
  console.log(err, 'this is the error message');
})

db.on('connected', () => {
  console.log('Mongoose is connected to mongodb');
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireList, (err, data) => {
//   console.log("added provided vampire data")
//   mongoose.connection.close();
// });

// ### Add some new vampire data
// Vampire.collection.insert({
//   name: 'Doris Dough',
//   hair_color: 'Dull',
//   eye_color: 'Dull',
//   dob: new Date(1956, 6, 18, 18, 18),
//   loves: ['brooding', 'shirtsleeves'],
//   location: 'New York, New York, US',
//   gender: 'f',
//   victims: 1258
// }, (err, data) => {
//   console.log("added one item");
//   mongoose.connection.close();
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females
// Vampire.find({ gender: 'f'}, (err, data) => {
//   console.log(data);
//   mongoose.connection.close();
// })

// // have greater than 500 victims
// Vampire.find({ victims:{$gt:500} }, (err, data) => {
//   console.log(data);
//   mongoose.connection.close();
// })

// have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (err, data) => {
//   console.log(data);
//   mongoose.connection.close();
// })

// have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (err, data) => {
//   console.log(data);
//   mongoose.connection.close();
// })

// have greater than 150 AND fewer than 500 victims  
// Vampire.find({ $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] }, (err, data) => {
//   console.log(data);
//   mongoose.connection.close();
// });


/////////////////////////////////////////////////
// ### Select by exists or does not exist
// have a title property
// Vampire.find({ title: {$exists: true}}, (err, data) => {
//   console.log(data);
//   db.close();
// })

// do not have a victims property
// Vampire.find({ victims: { $exists: false } }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// have a title AND no victims
// Vampire.find({ $and: [{title: {$exists: true}}, {victims: { $exists: false }}] }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// have victims AND the victims they have are greater than 1000
// Vampire.find({ $and: [{ victims: { $gte: 1000 } }, { victims: { $exists: true } }] }, (err, data) => {
//   console.log(data);
//   db.close();
// })

/////////////////////////////////////////////////
// ### Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({ $or: [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }] }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// love brooding or being tragic
// Vampire.find({ loves: { $in: ['brooding', 'being tragic'] } }, (err, data) => {
//   console.log(data);
//   db.close();
// });

// have more than 1000 victims or love marshmallows
// Vampire.find({ $or: [{ victims: { $gt: 1000 } }, { loves: { $in: ['brooding'] } }] }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// have red hair or green eyes
Vampire.find({ $or: [{ hair_color: 'red'}, { eye_color: 'green' }] }, (err, data) => {
  console.log(data);
  db.close();
})

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
