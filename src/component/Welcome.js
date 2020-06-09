import React, { useContext } from 'react';
import styles from './styles.module.css';
import { goToQuiz } from '../action/phaseActions';
import { PhaseContext } from '../context/phaseContext';

const Welcome = () => {

  const { phaseDispatch } = useContext(PhaseContext);

  return ( 
    <main className='appMain'>
      <h1 className = {styles.h1}>Welcome to Quiz App</h1>
      <div className = {styles.buttonContainer}>
        <button 
          className = {styles.buttonWelcome} 
          onClick = {() => goToQuiz(phaseDispatch)}
        >
          Play
        </button>
      </div>
    </main>
   );
}
 
export default Welcome;