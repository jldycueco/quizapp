import React, { useContext } from 'react';
import styles from './styles.module.css';
import { goToWelcome } from '../action/phaseActions';
import { PhaseContext } from '../context/phaseContext';

const Header = () => {
  const {phaseDispatch} = useContext(PhaseContext);

  return ( 
    <>
      <header 
        className = {styles.header}
        onClick = {() => goToWelcome(phaseDispatch)}
      >
        Quiz App
      </header>
    </>
   );
}
 
export default Header;