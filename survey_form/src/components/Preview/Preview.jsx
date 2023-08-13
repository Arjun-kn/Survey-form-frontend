import { Link } from 'react-router-dom'
import React from 'react'
import '../Preview/Preview.css'
import leftArrow from '../Question/left-arrow.png'
import Sidebar from '../Side_Navbar/Sidebar'
const Preview = () => {
    return(
        <div>
            <Sidebar />
            <div className="container">
            <div className="question-header">
              <Link><img src={leftArrow} alt="leftArrow" /></Link> <span>Preview</span>
              <div className="btn-container">
                <button className="closepreview-btn">Close Preview</button>
                <button className="save-btn">Save</button>
              </div>
            </div>
        <div className="card cardStyle">
        <div className="question-setting"><h6>Q1 
        <span className="setting-card">
        </span>
        </h6> <span>Question</span> </div>
        <input type="text" placeholder="Question will be displayed here" />
        <label htmlFor={`option1_1`}>
          <input type="radio" name={`question_1`} id={`option1_1`} />Option 1
        </label>
        <label htmlFor={`option2_2`}>
          <input type="radio" name={`question_2`} id={`option2_2`} />Option 2
        </label>
        <label htmlFor={`option3`}>
          <input type="radio" name={`question`} id={`option3`} />Option 3
        </label>
      </div>
      {/* 2nd q */}
      <div className="card cardStyle" >
        <div className="question-setting"><h6>Q2 
        <span className="setting-card">
        </span>
        </h6> <span>Question</span> </div>
        <input type="text" placeholder="Question will be displayed here" />
        <label htmlFor={`option1`}>
          <input type="radio" name={`question`} id={`option1`} />Option 1
        </label>
        <label htmlFor={`option2`}>
          <input type="radio" name={`question`} id={`option2`} />Option 2
        </label>
        <label htmlFor={`option3`}>
          <input type="radio" name={`question`} id={`option3`} />Option 3
        </label>
      </div>
      <div className="card cardStyle" >
        <div className="question-setting"><h6>Q3 
        <span className="setting-card">
        </span>
        </h6> <span>Question</span> </div>
        <input type="text" placeholder="Question will be displayed here" />
        <label htmlFor={`option1`}>
          <input type="radio" name={`question`} id={`option1`} />Option 1
        </label>
        <label htmlFor={`option2`}>
          <input type="radio" name={`question`} id={`option2`} />Option 2
        </label>
        <label htmlFor={`option3`}>
          <input type="radio" name={`question`} id={`option3`} />Option 3
        </label>
      </div>
      <div className="card cardStyle" >
        <div className="question-setting"><h6>Q4
        <span className="setting-card">
        </span>
        </h6> <span>Question</span> </div>
        <input type="text" placeholder="Question will be displayed here" />
        <label htmlFor={`option1`}>
          <input type="radio" name={`question`} id={`option1`} />Option 1
        </label>
        <label htmlFor={`option2`}>
          <input type="radio" name={`question`} id={`option2`} />Option 2
        </label>
        <label htmlFor={`option3`}>
          <input type="radio" name={`question`} id={`option3`} />Option 3
        </label>
      </div>
      <button className='btnStyle'>Add question</button>
        </div>
        </div>
    )
}

export default Preview