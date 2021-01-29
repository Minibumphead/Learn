import { useDispatch } from 'react-redux'
import { useState } from 'react'

import './styles.css'
import UserDetails from './UserDetails'
import CreateTodoForm from '../Forms/CreateTodoForm'
import { deleteUser } from '../../actions/users'


export default function UserComponent(props) {
    const dispatch = useDispatch()
    const [details, setDetails] = useState(false)
    const [currentUser, setCurrentUser] = useState(props.user)
    const [addTodo, setAddTodo] = useState(false)




    return(<>
        <div className='user-container'>
                <button className="user"
                        onClick={() => {
                            setDetails(!details)
                            setCurrentUser(currentUser)
                        }}>
                    {details ? `Hide todos for ${currentUser.username}`: `Show todos for ${currentUser.username}`}  
                </button> 
                { details ? <UserDetails user={currentUser} /> : null }
                <button className="user-delete" 
                        onClick={() => dispatch(deleteUser(currentUser._id))}>
                            Delete {currentUser.username}
                </button>
                <button className="user-addtodo" 
                        onClick={() => setAddTodo(!addTodo)}>
                            Add Todo for {currentUser.username}
                </button>
                { addTodo ? <CreateTodoForm user={currentUser} /> : null }
            </div>
        </>
    )
}