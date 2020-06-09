import React, { useContext } from 'react';
import { QuizContext } from '../context/quizContext';
import { 
  saveAnswer, 
  nextQuestion, 
  handleCorrectAnswer, 
  handleWrongAnswer, 
  resetQuiz
} from '../action/quizActions';

const questions = [
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the depth of the stress block, a. Assume that the tension steel is yielding.",
    answer: ["135mm",  "136mm",  "137mm",   "138mm"],
    correctAnswer:  "137mm",
    id: "099099",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      'Check if tension steel yields',
    answer: [ "True",  "False",  "N/A",   "All of the Above"],
    correctAnswer:  "True",
    id: "183452",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the Nominal Moment Strength",
    answer: [ "262 kN-m",  "263 kN-m",  "264 kN-m",   "265kN-m"],
    correctAnswer:  "263 kN-m",
    id: "267908", 
    solution: "Please see link"
  },
];

const QuizComponent = () => {
  const { state, dispatch } = useContext(QuizContext);

  const checkAnswer = (chosenAnswer, correctAnswer) => {
      if (chosenAnswer === correctAnswer){
        handleCorrectAnswer(dispatch);
        setTimeout(() => nextQuestion(dispatch), 1000)
    
      } else if (chosenAnswer !== correctAnswer){
        handleWrongAnswer(dispatch);
        setTimeout(() => nextQuestion(dispatch), 1000)
      }
    }

  return (
    <>
      {state.currentQuestion < questions.length ? (
        <>
          <div>Your Score is {state.score}/{questions.length}</div>
          <div>Question {state.currentQuestion + 1}</div>
          <div>
            <p>{questions[state.currentQuestion].question}</p>
            <img 
              src={questions[state.currentQuestion].img} 
              alt={questions[state.currentQuestion].img}
            />
            <ul>
              {questions[state.currentQuestion].answer.map((answer, index) => (
                <button 
                  key={index}
                  id = {answer}
                  value = {answer}
                  onClick = {e => {
                    saveAnswer(dispatch, answer, questions[state.currentQuestion].correctAnswer)
                    checkAnswer(e.target.value, questions[state.currentQuestion].correctAnswer)
                  }}
                  className = {
                    answer === state.selectedId && state.answerIsCorrect ? 
                    'btnCorrect' : 
                   answer === state.selectedId && state.answerIsCorrect === false ?
                     'btnWrong' : 
                     answer === state.correctAnswer && state.isAnswered ? 'btnCorrect' :
                    'btnDefault'
                  }  
                >
                  {String.fromCharCode(index + 65)}. {answer}
                </button>
              ))}
            </ul>
          </div>
        </>
      ): 
      <div>
        <button onClick= {() => resetQuiz(dispatch)}>Retry</button>
      </div>
      }
    </>
  );
}

export default QuizComponent;