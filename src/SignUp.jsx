import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {

    const[text,setText] = useState({
        fname:'',
        email:'',
        password:''
    })

const handlesubmit = (e) => {
  e.preventDefault()
  axios.post('https://todoappbackendgk.onrender.com/createRegister',text)
  .then((response) => {
    console.log(response.text)
    toast.success("Registered successfully!")
    setText({
      fname: '',
      email: '',
      password: '',
    });

  }).catch(error => console.log(error))
 

}

  return (
    <>
  <ToastContainer />

<main className="form-signin mt-5  w-25 mx-auto ">
  <form onSubmit={handlesubmit}>
    <h1 className="h3 mb-3 fw-normal">Please Register </h1>
    <div className="form-floating mb-3">
      <input type="text"  className="form-control"    name="fname"   placeholder='Name' value={text.fname}     onChange={e => setText({...text,fname: e.target.value})}     />
      <label htmlFor="floatingInput">Fullname</label>
    </div>
    <div className="form-floating mb-3">
      <input type="email" className="form-control"    name="email"  placeholder='Email'   value={text.email}    onChange={e => setText({...text,email: e.target.value})}      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control"   name="password" placeholder='Password'  value={text.password}  onChange={e => setText({...text,password: e.target.value})}  />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className='btn btn-primary  w-100 mb-4'>Register</button>

  </form>
  <Link to="/" > <button className="btn btn-success w-100 py-2">Login</button></Link>
</main>




    </>
  )
}

export default SignUp
