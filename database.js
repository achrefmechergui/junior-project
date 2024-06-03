const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/junior").then(()=>{
    console.log("connected to mongodb !!!")
})

const platformschema = mongoose.Schema({
    Image : String , 
    Name : String,
    Description : String,
    category :String
})

const model = mongoose.model('junior',platformschema)


module.exports = model