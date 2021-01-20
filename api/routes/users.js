import express from 'express'
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users.js'

const usersRouter = express.Router()

usersRouter.get('/', getUsers)
usersRouter.post('/', createUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)

export default usersRouter