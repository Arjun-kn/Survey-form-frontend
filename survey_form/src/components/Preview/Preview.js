import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import '../Preview/Preview.css'
import leftArrow from '../Question/left-arrow.png'
import Sidebar from '../Side_Navbar/Sidebar'
const Preview = () => {
    const navigate = useNavigate()
    const handleSave = () => {
        navigate('/home')
        alert("Data saved successfully")
    }
    const handleClosePreview = () => {
        navigate('/question')

    }
    return (
        <div>
            <Sidebar />
            <div className="container">
                <div className="question-header">
                    <Link><img src={leftArrow} alt="leftArrow" /></Link> <span>Preview</span>
                    <div className="btn-container">
                        <button className="closepreview-btn" onClick={handleClosePreview}>Close Preview</button>
                        <button className="save-btn" onClick={handleSave}>Save</button>
                    </div>
                </div>
                <div className="cardStyle">
                    <h6 className='question-clr'>Question 1</h6>
                    <h6>Question will be here</h6>
                    <div className='option-container'>
                        <label htmlFor="no">
                            <input type="radio" name="answer"id="no" />No
                        </label>
                        <label htmlFor="yes">
                            <input type="radio" name="answer" id="yes"/>Yes
                        </label>
                    </div>
                </div>
                <div className="cardStyle">
                    <h6 className='question-clr'>Question 2</h6>
                    <h6>Question will be here</h6>
                    <div className='option-container'>
                        <label htmlFor="no">
                            <input type="radio" name="answer"id="no" />No
                        </label>
                        <label htmlFor="yes">
                            <input type="radio" name="answer" id="yes"/>Yes
                        </label>
                    </div>
                </div>
                <div className="cardStyle">
                    <h6 className='question-clr'>Question 3</h6>
                    <h6>Question will be here</h6>
                    <div className='option-container'>
                        <label htmlFor="oneGroup">
                            <input type="radio" name="answer"id="oneGroup" />One Group
                        </label>
                        <label htmlFor="twoGroup">
                            <input type="radio" name="answer" id="twoGroup"/>2 Group
                        </label>
                        <label htmlFor="moreThanTwoGroup">
                            <input type="radio" name="answer" id="moreThanTwoGroup"/>More than 2 group
                        </label>
                    </div>
                </div>
                <div className="cardStyle">
                    <h6 className='question-clr'>Question 4</h6>
                    <h6>Question will be here</h6>
                    <div className='option-container'>
                        <label htmlFor="no">
                            <input type="radio" name="answer"id="no" />No
                        </label>
                        <label htmlFor="yes">
                            <input type="radio" name="answer" id="yes"/>Yes
                        </label>
                    </div>
                </div>
                <div className="cardStyle">
                    <h6 className='question-clr'>Question 5</h6>
                    <h6>Question will be here</h6>
                    <div className='option-container'>
                        <label htmlFor="numericalOutCome">
                            <input type="radio" name="answer"id="numericalOutCome" />Numerical Outcome
                        </label>
                        <label htmlFor="proportionalOutCome">
                            <input type="radio" name="answer" id="proportionalOutCome"/> Proportional Outcome
                        </label>
                        <label htmlFor="rateAsOutCome">
                            <input type="radio" name="answer" id="rateAsOutCome"/> Rate as outcome
                        </label>
                    </div>
                </div>
                <button className='btnStyle'>Add question</button>
            </div>
        </div>
    )
}

export default Preview