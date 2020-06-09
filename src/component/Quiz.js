import React, { useContext } from 'react';
import { QuizContext } from '../context/quizContext';
import { 
  saveAnswer, 
  nextQuestion, 
  handleCorrectAnswer, 
  handleWrongAnswer, 
} from '../action/quizActions';

import styles from './styles.module.css';
import Result from './Result';

const questions = [
  {
    question:
      "Compute the depth of the stress block, a. Assume that the tension steel is yielding.",
    answer: ["135mm",  "136mm",  "137mm",   "138mm"],
    correctAnswer:  "137mm",
    id: "099099",
    solution: "Please see link"
  },
  {
    question:
      'Check if tension steel yields',
    answer: [ "True",  "False",  "N/A",   "All of the Above"],
    correctAnswer:  "True",
    id: "183452",
    solution: "Please see link"
  },
  {
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
    <main className='appMain'>
      {state.currentQuestion < questions.length ? (
        <>
          <div className = {styles.questionCount}>
            Question {state.currentQuestion + 1}
            <div className={styles.spacer} />
            Score: {state.score}/{questions.length}
          </div>
          <div className = {styles.quizContainer}>
            <p className = {styles.questionText}>{questions[state.currentQuestion].question}</p>
            <ul className = {styles.answerContainer}>
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
                    styles.btnCorrect : 
                   answer === state.selectedId && state.answerIsCorrect === false ?
                     styles.btnWrong : 
                     answer === state.correctAnswer && state.isAnswered ? styles.btnCorrect :
                    styles.btnDefault
                  }  
                >
                  {String.fromCharCode(index + 65)}. {answer}
                </button>
              ))}
            </ul>
          </div>
        </>
      ): <Result length = {questions.length}/>              
      }
    </main>
  );
}

export default QuizComponent;