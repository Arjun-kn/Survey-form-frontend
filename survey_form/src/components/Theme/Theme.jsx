import React from 'react'
import '../Theme/Theme.css'

function Theme(onClose) {
 
  return (
       <div>
         <div className='container'>
      <form className='form'>
        <div className='form-header'>
          <h3 className='themse-setting'>Theme Setting</h3>
        </div>
        <div className='form-content'>
          <div className='theme'>
            <label htmlFor="theme">Theme</label> <br />
            <select>
            <option disabled selected value="" className="default">
                Select
              </option>
              <option>Fluent Dark</option>
              <option>High Contrast</option>
            </select>
          </div>
          {/* input 1st row */}


          <div className="row bottom">
            <div className="col-md-4">
              <label htmlFor="themeName" className="form-label">Theme Name</label>
              <input placeholder='Theme1' type="text" className="form-control" id="themeName" />
            </div>
            <div className="col-md-4">
              <label htmlFor="themeType" className="form-label">Theme Type</label>
              <div>
                <select name="ThemType" id="themeType">
                  <option value="Survey">Survey</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="formType" className="form-label">Form Type</label>
              <div>
                <select name="FormType" id="formType">
                  <option value="One to One">One to one</option>
                </select>
              </div>
            </div>
          </div>


          {/* 2nd row*/}
          <div className="row bottom">
            <div className="col-md-4">
            <label htmlFor="allQuestionsMandatory" className="form-label">All Questions Mandatory</label>
            <div>
              <select name="AllQuestionsMandatory" id="allQuestionsMandatory">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            </div>
            <div className="col-md-4">
            <label htmlFor="enableSkip" className="form-label">Enable Skip</label>
           <div>
            <select name="EnableSkip" id="enableSkip">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
           </div>
            </div>
            <div className="col-md-4">
            <label htmlFor="optionType" className="form-label">Option Type</label>
            <div>
              <select name="optionType" id="optionType">
                <option value="Box">Box</option>
              </select>
            </div>
            </div>
          </div>
          {/* 3rd row*/}
          
          <div className="row bottom">
            <div className="col-md-4">
              <label htmlFor="font" className="form-label">Font</label>
              <select>
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Sans-serif</option>
              </select>
            </div>
            <div className="col-md-4">
            <label htmlFor="font" className="form-label">Color</label>
              <input type="text" className="form-control" placeholder='#' id="font" />
              </div>
            </div>
          </div>
          <footer className='footer'>
          <div className="row justify-content-center">
          <div className="col-md-3">
            <button className='cancel-btn'>Cancel</button>
          </div>
          <div className="col-md-3">
            <button className='save-btn'>Save</button>
          </div>
        </div>
          </footer>
      </form>
    </div>
       </div>
   
  )
}

export default Theme