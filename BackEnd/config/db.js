const mongoose = require('mongoose')
const connectDB =async()=>{
try{
await mongoose.connect('mongodb+srv://abiramivjm1:kongu1984@cluster0.otxckla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
console.log("MongoDb connected")
}catch(err){
console.log(err)
}
}
module.exports = connectDB;