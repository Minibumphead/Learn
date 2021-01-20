
import UserListComponent from './Components/users/UserListComponent'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions/users'

function App() {
  const [userId, setCurrentId] = useState(null);
  
  return (
    <div className="App">
      <UserListComponent userId = {userId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;


