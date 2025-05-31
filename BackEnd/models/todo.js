const mongoose =require('mongoose')
const Todo=mongoose.Schema({
    task:String,
    completed:{type:Boolean,default:false},
})
module.exports=mongoose.model('Todo',Todo)