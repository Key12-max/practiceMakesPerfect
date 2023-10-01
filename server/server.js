const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()) // install to make cross-origin request means to connect both the react and express server becuase they both runs on different port 3000, and 8000.
app.use(express.json()) ; /* This allows JSON objects to be posted */
app.use(express.urlencoded({extended:true})); /* this allows JSON objects with strings and arrays */
require('./config/mongoose.config');
const port = 8000;
//link the server with our route 
require('./routes/person.routes')(app)
app.listen(port, ()=> console.log(`Listening on port: ${port}`));