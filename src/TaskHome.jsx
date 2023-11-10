import React from 'react'
import { Link } from 'react-router-dom'

const TaskHome = () => {
  return (
    <>

<div style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
    <h1 style={{marginTop:"12%",fontSize:"75px",width:"850px",color:"red"}}>Organize your work and<br/> life, finally.</h1>
   <Link to='/home' > <button className='btn btn-success' style={{marginTop:"18%",fontSize:"35px"}}>Start Here</button></Link>  
</div>



      
    </>
  )
}

export default TaskHome
