import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import todosRouter from './routes/todos.js'
import usersRouter from './routes/users.js'
import dotenv from 'dotenv'


// setting up express 
const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

// setting port and db connection
const PORT = 5000

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')) }

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5gnyy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,  { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false})
.then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
.catch((err)=>console.log(err))

// setting routes
app.use('/todos', todosRouter)
app.get('/', (req, res) => res.status(200).json("server running..."))
app.use('/users', usersRouter)
