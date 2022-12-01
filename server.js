const express = require('express')
require('dotenv').config()
const App = express()
const PORT = process.env.PORT || PORT
const cors = require('cors')

App.use(express.json())
App.use(cors())

App.listen(PORT, ()=>{
    console.log("Running at 4000");
})

