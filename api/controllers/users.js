import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


import usersModel from '../models/users.js'

export const getUsers = async (req,res) => {
    try {
        const all_users = await usersModel.find()
        res.send(all_users)
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (req,res) => {

    try {
        const username = req.body.username
        const plainTextPw = req.body.password
        const hashedPw = await bcrypt.hash(plainTextPw, 10)
        const newUser = usersModel({password: hashedPw, username: username })
        newUser.save()
        // note that this response can be accessed with axios using 
        // const { data } = await axios.post(url, someforminput)
        res.send(newUser)
    } catch (error) {
        console.log(error)
        console.log("______________________________________")
        console.log({errormessage: error.message})
    }
}

export const updateUser = async (req,res) => {

}

export const deleteUser = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send("A user with the given Id doesn't exist.")
    }
    try{
        await usersModel.findByIdAndDelete(id)
        const remainingUsers = await usersModel.find()
        res.send(remainingUsers)
    
    } catch (error) {
        console.log(error)
    }
   
}