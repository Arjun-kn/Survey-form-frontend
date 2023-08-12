import React from 'react'
import './Postform.css'
import { useNavigate } from 'react-router-dom'
function Postform() {

const navigate = useNavigate()

function handleCancel(){
    navigate('/home')
}
  return (
<>
<div className="prnta">
    <div className='headersec'>
        <h3>Create Survey</h3>
        <section className='btnsec'>
            <button onClick={handleCancel}>Cancel</button>
            <button>Next</button>
             </section>
    </div>

    <form className='frma'>
    
        <div className='leftsec'>
            <label>Name</label><br></br>
            <input type="text" placeholder='Name'></input><br/>
            <label>Description</label><br/>
           <textarea className='txtarea' placeholder='Description'></textarea><br></br>
           <label>Type of Survey</label><br/>
           <select className='selection'>
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
                    <input type='date' className='inpdate'></input>
                </div>
                <div className='enddate'>
                <label>End Date</label><br/>
                    <input type='date' className='inpdate'></input>  
                </div>
            </div>
            <div>
            <label>Other Criteria</label><br/>
           <textarea className='criteria' placeholder='Enter Here'></textarea>
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
