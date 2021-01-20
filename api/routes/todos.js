import express from 'express'
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todos.js'

const todosRouter = express.Router()

todosRouter.get('/', getTodos)
todosRouter.post('/', createTodo)
// :id means that any string will be accepted for the value after the forward slash
// however the the req.params object will have the structure { "id": "okasdjfg0ias80dghipsdgh"}
todosRouter.patch('/:id', updateTodo)
todosRouter.delete('/:id', deleteTodo)

export default todosRouter