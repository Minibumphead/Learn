import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../actions/users'
import './styles.css'

export default function UserSignUpForm (props) {
    
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        confirm: ''
    })
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const currentField = event.target.name
       if (currentField === 'username') {
           setSignUpData({...signUpData, username: event.target.value})
       } else if (currentField === 'password'){
            setSignUpData({...signUpData, password: event.target.value})
       } else {
           setSignUpData({...signUpData, confirm: event.target.value})
       }
    }    

    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (signUpData.password === signUpData.confirm) {
            console.log('password and confirm match')
            dispatch(createUser(signUpData))

        } else {
            alert('Passwords did not match')
        }

        clear()
    }

    const clear = () => {
        setSignUpData({
            username: '',
            password: '',
            confirm: ''
        })
    }
    return (
        <>
            <h1>Sign up a new User</h1>
            <form>
                <input type="text" label="username" name="username" placeholder="username" value={signUpData.username} onChange={handleChange}></input>
                <input type="text" label="password" name="password" placeholder="password" value={signUpData.password} onChange={handleChange}></input>
                <input type="text" label="confirm" name="confirm" placeholder="confirm password" value={signUpData.confirm} onChange={handleChange}></input>
                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
        </>
    )
}