const express = require('express')

const app = express()
const db = require('./database.js')
const foodroutes = require('./routes/foodroutes.js')
const cors = require('cors')
const path = require('path')


app.use(cors())



app.use(express.static(path.join(__dirname,'View')))

app.use(express.json()) 
app.use('/',foodroutes)




app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})