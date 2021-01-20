import mongoose from 'mongoose'
import todosModel from '../models/todos.js'

export const getTodos = async (req, res) => {
    const all_todos = await todosModel.find()
    res.status(200).json(all_todos)
}

export const createTodo = async (req, res) => {
    const todo = req.body
    const newTodo = new todosModel(todo)
    try {
        await newTodo.save()
        res.send(newTodo)
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async (req, res) => {
    // fetching the id from the request parameters (displayed in URL)
    // since the req.params object has been destructured typeof id is string
    const {id} = req.params
    const newData = req.body

    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).send(`Object with the id ${id} not found`)
        }

        const updatedId = await todosModel.findByIdAndUpdate(id, {...newData, id}, {new:true})
        res.send(updatedId)

    } catch (error) {
        console.log(error)
    }
   

}

export const deleteTodo = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send(`Todo with the id ${id} not found`)
    } 

    try {
        await todosModel.findByIdAndDelete(id)
        res.status(200).send(`Todo with the id ${id} has been deleted`)
    } catch (error) {
        console.log(error)
    }
    
}