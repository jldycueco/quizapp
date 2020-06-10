import React, { useContext } from 'react';
import styles from './styles.module.css';
import { goToQuiz } from '../action/phaseActions';
import { PhaseContext } from '../context/phaseContext';
import { handleSliderChange } from '../action/phaseActions';

const Welcome = () => {
  const { length, phaseDispatch } = useContext(PhaseContext);
  
  return ( 
    <main className='appMain'>
      <h1 className = {styles.h1}>Welcome to Quiz App</h1>
      <div className = {styles.buttonContainer}>
        <h2 className = {styles.h2}>Please select number of questions</h2>
        <div className = "slidecontainer">
          <input 
            type="range" 
            min="5" 
            max="50" 
            value={length} 
            class="slider"
            onChange={(e) => handleSliderChange(phaseDispatch, e)}
          />
          <h3>Number: {length}</h3>
        </div>
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