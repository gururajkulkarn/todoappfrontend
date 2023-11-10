import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Login = () => {

  const[text,setText] = useState({
    email:'',
    password:''
})

const navigate = useNavigate()

const handlesubmit = (e) => {
  e.preventDefault()
  axios.post('https://todoappbackendgk.onrender.com/login',text)
  .then(response => {
    console.log(response)
    if(response.data === "Success"){
      navigate('/taskhome')
    }
    else{
      alert('incorrect credentials')
  }
    console.log(text)
  }).catch(error => console.log(error))

}


  return (
    <>
      <main className="form-signin mt-5  w-25 mx-auto ">
  <form onSubmit={handlesubmit}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="form-floating mb-3">
      <input type="email" className="form-control"  name="email" placeholder='Email'  onChange={e => setText({...text,email: e.target.value})} required />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating ">
      <input type="password" className=" form-control "name="password" placeholder='Password'  onChange={e => setText({...text,password: e.target.value})} required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
      Already have account
      </label>
    </div><button className='btn btn-primary  w-100 mb-4'>Login</button>
    <Link to="/register" > <button className="btn btn-success w-100 py-2">Register</button></Link>
  </form>
</main>



      
    </>
  )
}

export default Login
