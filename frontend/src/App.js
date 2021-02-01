
import { useSelector } from 'react-redux'
import UserSignUpForm from './Components/Forms/UserSignUpForm'
import UserList from './Components/Users/UserList'
import './App.css'


function App() {
  const all_users = useSelector(state => state.users)
  return (
    <div className="App">
      <UserSignUpForm />
      <UserList all_users = {all_users}/>
    </div> 
  );
}

export default App;


