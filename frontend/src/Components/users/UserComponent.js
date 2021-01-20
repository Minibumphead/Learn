import {useState} from 'react'
export default function UserComponent ({user, userId, setCurrentId}) {
    setCurrentId(user._id)
    return(
        <>
            <div>Username: {user.username}</div>
            <div>{userId}</div>
            <div>{user.password}</div>
        </>
    )
}