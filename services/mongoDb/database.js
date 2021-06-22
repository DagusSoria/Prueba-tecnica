const mongoose = require('mongoose');
const { MONGODB_URI } = require('../../config/default');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('Db connected')
}).catch(err => {
    throw new Error('Ha habido un error para conectar a la base de datos, intente reiniciar el servidor', err)
}) 

/* const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */