//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Users').find({_id:123}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users',err);
  });

  // Insert new doc into Users Collection (name. age, location)

  //
   //db.close();
});
