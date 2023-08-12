import { useState } from "react";


const QuestionCard =() => {
    const [questions, setQuestions] = useState([{question: 1}])
    const handleQuestion = () => {
        let questionNo = questions.length + 1
        setQuestions(...questions, )
    }
    return(
        <div>
            {
                questions.map((key, index) => {
                    <div className="card" key={index}>
                        <h5>Q{questions}</h5><span>Question</span>
                        <input type="text" />
                        <input type="radio" name={`option${questions}`} id="option1" />
                        <label htmlFor="option1">Options 1</label>
                        <input type="radio" name={`option${questions}`} id="option2" />
                        <label htmlFor="option1">Options 2</label>
                        <input type="radio" name={`option${questions}`} id="option2" />
                        <label htmlFor="option1">Options 2</label>
                    </div>
                })
            }
            <button onClick={handleQuestion}>Add Question</button>
        </div>
    )
}

export default QuestionCard





















/*const QuestionCard = () => {
        const [questions, setQuestions] = useState([{ questionNo: 1 }]);

        const handleCardClick = () => {
          const newQuestionNo = questions.length + 1;
          const newQuestion = { questionNo: newQuestionNo };
          setQuestions([...questions, newQuestion]);
        };
      
        return (
          <div>
            {questions.map((question, index) => (
              <div className="card" style={{ width: '60%' }} key={index}>
                <h4>Q{question.questionNo}</h4> <span>Question</span>
                <input type="text" />
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
            <button onClick={handleCardClick}>Add New Card</button>
          </div>
        );
}

export default QuestionCard
*/