//import all packages
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoutes = require('./routes/UserRoute')

//initialize app
const app = express() 
app.use(bodyParser.json())
app.use(cors())

//to  establish mongodb connection
dotenv.config()

app.use('/user',userRoutes)

//to process
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

//connection with Database
mongoose.connect(URL).then(()=>{
    console.log("DB Connected Successfully");
  
}).catch((error) => console.log(error));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})