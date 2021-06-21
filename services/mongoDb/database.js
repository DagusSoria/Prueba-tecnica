const mongoose = require('mongoose');
const { MONGODB_URI } = require('../../config/default');

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('Db connected')
}).catch(err => {
    throw new Error('Ha habido un error para conectar a la base de datos, intente reiniciar el servidor', err)
})