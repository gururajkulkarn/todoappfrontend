import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {

const [text,setText] = useState({
  title:'',
  descri:'',
  deadline:''
})


const navigate = useNavigate()

const handlesubmit = (e) =>{
e.preventDefault()
axios.post('https://todoappbackendgk.onrender.com/createTask',text)
.then(response => {
  navigate('/home')
}).catch(error => console.log(error))

}


  return (
    <> 
    <ToastContainer />
    <div className='container '>
      <h1 style={{color:"red"}}>Add Your Todo Task  </h1>  

<div style={{backgroundColor:"green",borderRadius:"30px"}}> 

<form onSubmit={handlesubmit}>
<div className="row ">
    <div className="col">
    <input type="text" className='form-control   m-3 w-50'  name="title"  placeholder='Task Name'  onChange={e =>setText({...text,title: e.target.value})}/>
  
    <textarea type="text" className='form-control   m-3 w-50'  name="descri" placeholder='Description' onChange={e =>setText({...text,descri: e.target.value})}/>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <input type="date" className='form-control   m-3 w-50'  name="deadline"   placeholder='Deadline'   onChange={e =>setText({...text,deadline: e.target.value})}/>
    </div>
  </div>
    <button className='btn btn-primary m-3'>Add Todo</button>
   
</form>
</div>
    </div>
    </>
  )


}

export default CreateUser
