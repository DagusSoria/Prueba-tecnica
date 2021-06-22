const express = require('express')
const app = express()
const { PORT } = require('./config/default');
require('./services/mongoDb/database');

let port = PORT || 3000
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', indexRouter);
app.use('/auth', authRouter);
  
//Start server
app.listen(port, () => {
    console.log("server in port " + port);
})