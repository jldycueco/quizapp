import React, { useContext } from 'react';
import styles from './styles.module.css';
import { PhaseContext } from '../context/phaseContext';
import { QuizContext } from '../context/quizContext';
import { goToWelcome, goToQuiz } from '../action/phaseActions';
import { resetQuiz } from '../action/quizActions';

const Result = ({length}) => {
  const { phaseDispatch } = useContext(PhaseContext);
  const { state, dispatch } = useContext(QuizContext); 

  const score = (state.score/length*100).toFixed(2);
  let scoreDescription;

    if (score <= 30) {
      scoreDescription = "You still have a lot to learn!";
    } else if (score > 30 && score <= 50) {
      scoreDescription = "You can do better!";
    } else if (score > 50 && score <= 70) {
      scoreDescription = "Not bad, not bad at all!";
    } else if (score > 70 && score <= 90) {
      scoreDescription = "Good job!";
    } else {
      scoreDescription = "Excellent result!";
    }


  return ( 
    <>
      <h1 className = {styles.h1}>Your Score:</h1>
      <h1 className= {styles.h1}>{score} %</h1>
      <h2 className= {styles.h2}>{scoreDescription}</h2>
      <div className = {styles.buttonContainer}>
        <button 
          onClick = {
            () => {
              resetQuiz(dispatch);
              goToQuiz(phaseDispatch);
            }
          }
          className = {styles.buttonWelcome}
        >
          Try Again
        </button>
        <button 
          onClick = {
            () => goToWelcome(phaseDispatch)
          }
          className = {styles.buttonWelcome}
        >
          Go Back to Welcome Page
        </button>
      </div>
      
    </>
   );
}
 
export default Result;