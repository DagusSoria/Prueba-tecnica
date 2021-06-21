const express = require('express')
const app = express()
const { PORT } = require('./config/default');
require('./services/mongoDb/database');

let port = PORT || 3000
const indexRouter = require('./routes/index');

app.use(express.json());
app.use('/', indexRouter)
  
//Start server
app.listen(port, () => {
    console.log("server in port " + port);
})