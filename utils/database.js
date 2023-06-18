// const { MongoClient } = require('mongodb');

// let _db;

// const mongoDbConnect = (callback) => {

//     MongoClient.connect('mongodb+srv://root:root@cluster0.3ku0kiu.mongodb.net/shop?retryWrites=true&w=majority').then(
//         (client) => {
//             console.log("connected client ssssssssssss", client);
//             _db = client.db()
//             callback()
//         }
//     ).catch(err => {
//         console.log(err);
//         throw err
//     })
// }
// console.log("_db up", _db);

// const getDb = (_db) => {
//     console.log("_db", _db);

//     if (_db) {
//         return _db
//     }

//     throw "No data base found!"
// }


// exports.mongoDbConnect = mongoDbConnect;
// exports.getDb = getDb;





const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://root:root@cluster0.3ku0kiu.mongodb.net/shop?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function mongoDbConnect() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

// mongoDbConnect()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

  exports.mongoDbConnect = mongoDbConnect