import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import SignUp from './SignUp'
import Login from './Login'
import TaskHome from './TaskHome'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/taskhome" element={<TaskHome/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/home" element={<Users/>}></Route>
      <Route path="/create" element={<CreateUser/>}></Route>
      <Route path="/update/:id" element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
