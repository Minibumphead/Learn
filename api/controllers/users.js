import mongoose from 'mongoose'
import {v4 as createUserIdwithUuid} from 'uuid' 

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
    const newId = createUserIdwithUuid()

    try {
        const userData = req.body
        const newUser = usersModel({...userData, userId: newId})
        newUser.save()
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
        res.send(`User with the id ${id} has been deleted`)
    
    } catch (error) {
        console.log(error)
    }
   
}