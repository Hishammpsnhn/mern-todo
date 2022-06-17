import express from "express";
import mongoose from "mongoose";
import Todo from '../models/todo.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const post = await Todo.find();
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
});
router.post('/', async (req, res) => {
    const todo = await req.body;
    const newPost = await new Todo(todo)
    try {
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        console.log(error)
        res.status(404)
    }

});
router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post in this id');
    await Todo.findByIdAndDelete(id);
    res.json({message:'success fully deleted'})
});
router.patch('/:id',async (req,res)=>{
    console.log("hlel woeld")
    const {id}  = req.params;
    const updatedPost = req.body;
    console.log(updatedPost,id)
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post in this id");
    try {      
     const updatedData = await Todo.findByIdAndUpdate(id,updatedPost,{ new: true })
     res.json(updatedData)
    } catch (error) {
        console.log(error)
    }
})

export default router