//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console. log('Connected to MongoDB server');


  //  deleteMany
  db.collection('Users').deleteMany({name:'tes'}).then((result)=> {
    console.log(result);
  });

  // deleteOne

  //findOneAndDelete


   //db.close();
});
