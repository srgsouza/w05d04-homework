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
// Vampire.find({ $or: [{ hair_color: 'red'}, { eye_color: 'green' }] }, (err, data) => {
//   console.log(data);
//   db.close();
// })

/////////////////////////////////////////////////
//### Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
// Vampire.find({ $or: [{ loves: { $in: ['frilly shirtsleeves'] }, loves: { $in: ['frilly collars'] } } ] }, (err, data) => {
//   console.log(data);
//   db.close();
// });

// love brooding
// Vampire.find({ loves: { $in: ['brooding'] } }, (err, data) => {
//   console.log(data);
//   db.close();
// });

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R & B music
// Vampire.find({ loves: { $in: ['brooding', 'appearing innocent', 'trickery', 'lurking in rotting mansions', 'R & B music' ] } }, (err, data) => {
//   console.log(data);
//   db.close();
// });
// love fancy cloaks but not if they also love either top hats or virgin blood * Hint - You will also have to use $nin *
// Vampire.find({ loves: { $eq: 'fancy cloaks', $nin: ['virgin blood', 'top hats'] }, }, (err, data) => {
//   console.log(data);
//   db.close();
// });

/////////////////////////////////////////////////
//### Negative Selection
// love ribbons but do not have brown eyes
// Vampire.find({loves: 'ribbons'}, {eye_color: {$ne:'brown'}}, (err, data) => {
//   console.log(data);
//   db.close();
// });

// are not from Rome
// Vampire.find({location: {$ne: 'Rome, Italy'}}, (err, data) => {
//   console.log(data);
//   db.close();
// })
// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({ loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding'] } }, (err, data) => {
//   console.log(data);
//   db.close();
// });

// have not killed more than 200 people
// Vampire.find({victims: {$lt: 200}}, (err, data) => {
//   console.log(data);
//   db.close();
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.findOneAndUpdate(
//   { name: 'Claudia' }, // search criteria of what to update
//   { $set: { name: 'Eve', portrayed_by: 'Tilda Swinton' } }, // how to update it
//   { new: true }, // tells findOneAndUpdate to return modified article, not the original
//   (err, article) => {
//     console.log(err);
    
//     console.log(article);
//     db.close();
// });


// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate(
//   { gender: 'm' }, // search criteria of what to update
//   { $set: { name: 'Guy Man', is_actually: 'were-lizard' } }, // how to update it
//   { new: true }, // tells findOneAndUpdate to return modified article, not the original
//   (err, data) => {
//     console.log(data);
//     db.close();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Vampire.findOneAndUpdate({}, (err, data) => {
//   console.log(data);
//   db.close();
// })

// ## UPDATE
// Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate({name:'Guy Man'}, {$set: {gender: 'f'}}, {new: true}, (err, data) => {
//   console.log(data);
//   db.close();
// })

// Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate({ name: 'Eve' }, { $set: { gender: 'm' } }, { new: true }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate({ name: 'Guy Man' }, { $set: { hates: ['clothes', 'jobs'] } }, { new: true }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate({ name: 'Guy Man' }, { $set: { hates: ['clothes', 'jobs', 'alarm clocks', 'jackalopes' ] } }, { new: true }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate({ name: 'Eve' }, { $set: { name: 'moniker' } }, { new: true }, (err, data) => {
//   console.log(data);
//   db.close();
// })

// We now no longer want to categorize female gender as "f", but rather as fems.Update all females so that the they are of gender "fems".
// Vampire.updateMany({ gender: 'fem' }, { gender: 'fems' }, (err, data) => {
//   console.log(data);
//   db.close();
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove(
//   {hair_color: 'brown'}, (err, data) => {
//   console.log(data);
//   db.close();
// })

// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.deleteMany({eye_color: 'blue'}, (err, data) => {
//   console.log(data);
//   db.close();
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
