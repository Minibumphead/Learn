
import { useSelector } from 'react-redux'
import UserSignUpForm from './Components/Forms/UserSignUpForm'
import TodosList from './Components/Todos/TodosList'
import UserList from './Components/Users/UserList'
import './App.css'


function App() {
  const all_users = useSelector(state => state.users)
  const all_todos = useSelector(state => state.todos)
  return (
    <div className="App">
      <UserSignUpForm />
      <UserList all_users = {all_users}/>
    </div> 
  );
}

export default App;


