import mongoose from 'mongoose'

const todosSchema = mongoose.Schema({
    title: {
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
    }
})

const todosModel = mongoose.model("todosModel", todosSchema, "todos")

export default todosModel