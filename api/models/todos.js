import mongoose from 'mongoose'

const todosSchema = mongoose.Schema({
    todo: {
        type: String,
        enum: ["Bad", "Kueche", "Gang", "Sonstiges"],
        default: "Kueche"
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    completedAt: {
        type: Date,
        default: null
    },
    user: 
        { type: mongoose.Types.ObjectId,
        ref: "userModel" }
    
})

const todosModel = mongoose.model("todosModel", todosSchema, "todos")

export default todosModel