import mongoose from 'mongoose';



const todoSchema = mongoose.Schema({
 title:String,
 
 createdAt: {
    type: Date,
    default: new Date()
}
})

const Todo = mongoose.model('todo',todoSchema);
export default Todo;