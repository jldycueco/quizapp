import React, { useContext } from 'react';
import { QuizContext } from '../context/quizContext';
import { PhaseContext } from '../context/phaseContext';
import { 
  saveAnswer, 
  nextQuestion, 
  handleCorrectAnswer, 
  handleWrongAnswer, 
} from '../action/quizActions';

import styles from './styles.module.css';
import Result from './Result';
import questionsArray from '../data/Questions';
import shuffle from '../utils/shuffleArray';


const questions = shuffle(questionsArray);

const QuizComponent = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { length } = useContext(PhaseContext);

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
      {state.currentQuestion < length ? (
        <>
          <div className = {styles.questionCount}>
            Question {state.currentQuestion + 1}
            <div className={styles.spacer} />
            Score: {state.score}/{length}
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
      ): <Result length = {length}/>              
      }
    </main>
  );
}

export default QuizComponent;