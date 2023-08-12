import React from 'react'
import '../Theme/Theme.css'
import close from '../Theme/Assets/close.png'
import { Link } from 'react-router-dom'
function Theme() {
  return (
    <div className='container'>
      <form className='form'>
        <div className='form-header'>
          <h3 className='themse-setting'>Theme Setting</h3>
          <nav><Link to='/'><img height='20px' width='20px' src={close} alt='close' /></Link></nav>
        </div>
        <div className='form-content'>
          <div className='theme'>
            <label htmlFor="theme">Theme</label> <br />
            <input type="text" placeholder='Select' name="Theme" id="theme" />
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
              <input type="text" placeholder='Robot' className="form-control" id="font" />
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
  )
}

export default Theme