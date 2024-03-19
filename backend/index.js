const connectToMongoose=require('./db')
const express = require('express');
const app = express()
var cors = require('cors')
require('dotenv').config();


 
app.use(cors())
// console.log(process.env);
// const port = 5000
const port = process.env.port || 5000; // Change 3000 to a port number that is not in use


connectToMongoose();

app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.use('/api/email',require('./routes/email'))




app.listen(port, () => {
  console.log(`Backend is listening at port ${process.env.REDIRECT_URL}`)
})
