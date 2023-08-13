import React, { useState } from 'react'
import './Postform.css'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Side_Navbar/Sidebar'
function Postform() {

const navigate = useNavigate()

const [newdata,setnewData] = useState({
    Name:"",
    Description:"",
    Type:"",
    Start_Date:"",
    End_Date:"",
   

})

function handleSubmit(e){
    e.preventDefault()

}

function saveData(){
    const token = sessionStorage.getItem('token');
    fetch(`http://localhost:8080/userpost`, {
      method: 'POST',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newdata),
    })
    .then(response => response.json())
    .then(response=>{

console.log(response.data)
    })
    .catch(error => console.error('Error creating survey:', error));

    navigate('/question')
}

function handleCancel(){
    navigate('/home')
}
  return (
<>
<Sidebar/>
<div className="prnta">
    <div className='headersec'>
        <h3>Create Survey</h3>
        <section className='btnsec'>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={saveData}>Next</button>
             </section>
    </div>

    <form className='frma' method="POST" onSubmit={handleSubmit}>
    
        <div className='leftsec'>
            <label>Name</label><br></br>
            <input type="text" placeholder='Name' value={newdata.Name} onChange={(e)=>setnewData({...newdata, Name:e.target.value})}></input><br/>
            <label>Description</label><br/>
           <textarea className='txtarea' placeholder='Description' value={newdata.Description} onChange={(e)=>setnewData({...newdata, Description:e.target.value})}></textarea><br></br>
           <label>Type of Survey</label><br/>
           <select className='selection' value={newdata.Type} onChange={(e)=>setnewData({...newdata, Type:e.target.value})}>
           <option disabled selected value="" className='default'>Select</option>
            <option>Feedback</option>
            <option>video</option>
            <option>product</option>
           </select>

        </div>
        <div className='rightsec'>
            <div className='date'>
                <div className='startdate'>
                    <label>Start Date</label><br/>
                    <input type='date' className='inpdate' value={newdata.Start_Date} onChange={(e)=>setnewData({...newdata, Start_Date:e.target.value})}></input>
                </div>
                <div className='enddate'>
                <label>End Date</label><br/>
                    <input type='date' className='inpdate' value={newdata.End_Date} onChange={(e)=>setnewData({...newdata, End_Date:e.target.value})}></input>  
                </div>
            </div>
            <div>
            <label>Other Criteria</label><br/>
           <textarea className='criteria' placeholder='Enter Here' ></textarea>
            </div>
            <div>
                <label>Upload Image</label>
                <input className='imagefile' type='file' ></input>
                <div className='copyimg'></div>
            </div>
        </div>
       
    </form>
  



</div>


</>
  )
}

export default Postform
