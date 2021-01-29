import mongoose from 'mongoose'

// A Mongoose model is a wrapper on the Mongoose schema. 
// A Mongoose schema defines the structure of the document, default values, validators, etc.
// A Mongoose model provides an interface to the database for 
// creating, querying, updating, deleting records, etc.

const usersSchema = mongoose.Schema({
    userId: String,
    password: String,
    points: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
        required: true
    },
    todos:[ {
        type: mongoose.Types.ObjectId,
        ref: "todosModel"
    }]
})

const userModel = mongoose.model("userModel", usersSchema, "users")

export default userModel