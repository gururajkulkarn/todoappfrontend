import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {

const{id} = useParams()

const [text,setText] = useState({
  title:'',
  descri:'',
  deadline:''
  
})
const navigate = useNavigate()



useEffect(()=>{
  axios.get('https://todoappbackendgk.onrender.com/getTask/' + id)
  .then((response) => {
    console.log(response)
    setText(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
  },[])



const handlesubmit = (e) => {
  e.preventDefault()
  axios.put('https://todoappbackendgk.onrender.com/updateTask/'+id,text)
  .then(result => {
    console.log(result)
    alert("Data Updated successfully...")
    navigate('/home')
  } )
  .catch(err => console.log(err))
}



  return (
    <div className='container'>
      <h1>Update User</h1>
<form onSubmit={handlesubmit}>

<div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="title" value={text.title}    placeholder='Title'    onChange={e =>setText({...text,title: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="descri" value={text.descri}    placeholder='Description'     onChange={e =>setText({...text,descri: e.target.value})}/>
    </div> 
  </div>

  <div className="row">
    <div className="col">
    <input type="date" className='form-control   m-3'  name="deadline" value={text.deadline}        placeholder='DeadLine'  onChange={e =>setText({...text,deadline: e.target.value})}/>
    </div>
  </div>

    <button className='btn btn-success m-3'>Update</button>
   
</form>

    </div>
  )
}

export default UpdateUser
