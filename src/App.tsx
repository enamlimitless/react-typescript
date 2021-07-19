import React, { useState } from 'react';
import './App.css';
import User, {UserInt} from './components/User';

function App() {
  
  interface AllUserInt {
    currentUser: UserInt
    allUsers: Array<UserInt>
  }
  const [userState, setUserState] = useState<AllUserInt>({
    currentUser: {
      name: "",
      job: "",
      age: 0,
      deleteUser: () => {}
    },
    allUsers: []
  })
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value) 
    setUserState({
      ...userState,
      currentUser: {
        ...userState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    setUserState({
      currentUser: {
        name: "",
        job: "",
        age: 0,
        deleteUser: () => {}
      },
      allUsers: [
        ...userState.allUsers,
        userState.currentUser
      ]
    })
  }

const deleteHandler = (index: number) => {
  const filerUsers = userState.allUsers.filter((user, i) => {
    return index !== i
   })
   setUserState({
    ...userState,
    allUsers: filerUsers
   })
  
}

  const allUsers = userState.allUsers.map((user, i) => (
    // <div key={i}>
    //   <h2>{user.name}</h2>
    //   <h2>{user.job}</h2>
    //   <h2>{user.age}</h2>
    //   <button onClick={() => deleteHandler(i)}>Delete User</button>
    // </div>
    <User name={user.name} age={user.age} job={user.job} deleteUser={() => deleteHandler(i)}/>
  ))

  console.log(userState.currentUser)
  return (
    <div className="container">
      <h1>React With Typescript Assignment</h1>
      <h1>Add Users</h1>
      <form onSubmit={submitForm} className="card">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="userName" value={userState.currentUser.name} onChange={onChangeHandler} required />
        <label htmlFor="job">Job:</label>
        <input type="text" name="job" id="jobStatus" value={userState.currentUser.job} onChange={onChangeHandler} required />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" value={userState.currentUser.age} onChange={onChangeHandler} required />
        <button className="addBtn">Add User</button>
      </form>
      {allUsers}
    </div>
  );
}

export default App;
