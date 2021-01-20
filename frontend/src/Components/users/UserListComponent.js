// This component should display a button for each user.
// When the button is clicked the detail view for each user should be displayed (<UserComponent />)

import {useEffect, useState} from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getUsers } from '../../actions/users'

import UserComponent from './UserComponent'


export default function UserListComponent({setCurrentId, userId}) {
    // const [users, setUsers] = useState([]);
    const users = useSelector(state => state);
    console.log(users);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])
    
    return (
        <>
            {/* {
                users.map(user => <button key={user._id} user={user} setCurrentId={setCurrentId} userId={userId} >{user.username}</button>)
            } */}
        </>

    )
}