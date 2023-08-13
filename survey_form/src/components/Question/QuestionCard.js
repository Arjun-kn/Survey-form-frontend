import React from 'react';
import { useState } from "react";
import '../Question/Question.css'
import { Link, useNavigate } from "react-router-dom";
import gear from '../Question/gear.png'
import leftArrow from '../Question/left-arrow.png'
import Sidebar from '../Side_Navbar/Sidebar';


const QuestionCard = () => {
  const [questions, setQuestions] = useState([{ questionNo: 1, popup : false }]);
  const handleBtn = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].popup = !newQuestions[index].popup;
    setQuestions(newQuestions);
  }
  
  const navigate = useNavigate()
  const handleCardClick = () => {
    const newQuestionNo = questions.length + 1;
    const newQuestion = { questionNo: newQuestionNo, popup : false };
    setQuestions([...questions, newQuestion]);
  };
  return (
    <div>
      <Sidebar />
      <div className="container">
        <div className="question-header">
          <Link><img src={leftArrow} alt="leftArrow" /></Link> <span>Create Question</span>
          <div className="btn-container">
            <button className="theme-btn" onClick={(e) => navigate('/theme')}><img src={gear} alt="gear" />Theme Setting</button>
            <button className="previewbtn" onClick={() => navigate('/preview')}>Preview</button>
            <button className="savebtn">Save</button>
          </div>
        </div>
        {questions.map((question, index) => (
          <div className="card cardStyle" key={index}>
            <div className="question-setting"><span>
            <h6>Q{index + 1}
              <span className="setting-card">
                <button onClick={() => handleBtn(index)}>
                  {question.popup ? (<form>
                    <label className="questionType" htmlFor="questionType">Question-Type</label>
                    <select className="selectQuestion" name="QuestionType" id="questionType">
                      <option value="Multiple Choice">Multiple Choice</option>
                    </select>
                  </form>) : (<img src={gear} alt="setting" style={{ filter: "brightness(0) sepia(1) hue-rotate(15deg)" }} />)}
                </button>
              </span>
            </h6>
              </span> <span>Question</span> </div>
            <input type="text" placeholder="Question will be displayed here" />
            <label htmlFor={`option1_${index}`}>
              <input type="radio" name={`question_${index}`} id={`option1_${index}`} />Option 1
            </label>
            <label htmlFor={`option2_${index}`}>
              <input type="radio" name={`question_${index}`} id={`option2_${index}`} />Option 2
            </label>
            <label htmlFor={`option3_${index}`}>
              <input type="radio" name={`question_${index}`} id={`option3_${index}`} />Option 3
            </label>
          </div>
        ))}
        <button className="btnStyle" onClick={handleCardClick}>Add question</button>
      </div>
    </div>
  );
}
export default QuestionCard