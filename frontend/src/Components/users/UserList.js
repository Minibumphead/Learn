import UserComponent from './UserComponent'

export default function UserList (props) { 
    const all_users = props.all_users
    return (
        <>
            {all_users.map(user => <UserComponent key={user.userId} user={user} />)}
        </>
    )
}