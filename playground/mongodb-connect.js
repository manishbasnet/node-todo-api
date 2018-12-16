//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users Collection (name. age, location)
  // db.collection('Users').insertOne({
  //   _id: 123,
  //   name: 'abc',
  //   age: 20,
  //   location: 'ktm'
  // },(err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //     console.log(result.ops[0]._id.getTimetamp());
  // });
  //
  // db.close();
});
