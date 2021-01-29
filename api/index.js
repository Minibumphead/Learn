import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import todosRouter from './routes/todos.js'
import usersRouter from './routes/users.js'

// setting up express 
const app = express()
app.use(bodyParser.json())
app.use(cors())

// setting port and db connection
const PORT = 5000
const DB_CONNECTION = "mongodb+srv://Minibumphead:catdogmouse!!!999@cluster0.5gnyy.mongodb.net/wg_db?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION,  { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false})
.then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
.catch((err)=>console.log(err))

// setting routes
app.use('/todos', todosRouter)
app.get('/', (req, res) => res.status(200).json("server running..."))
app.use('/users', usersRouter)
