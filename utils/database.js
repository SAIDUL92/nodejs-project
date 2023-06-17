const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {

    mongoClient.connect('mongodb+srv://root:root@cluster0.3ku0kiu.mongodb.net/?retryWrites=true&w=majority').then(client => {
        cb(client)
        console.log('connected');
        _db = client.db()
    }).catch(
        err => {
            console.log(err);
        }
    )
}


const getDB = () => {

    if (_db) {
        return _db
    }

    throw 'no data base found'
}


exports.mongoConnect = mongoConnect
exports.getDB = getDB