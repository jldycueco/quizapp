import React, { useContext } from 'react';
import './App.css';
import QuizComponent from './component/Quiz';
import Header from './component/Header';
import Welcome from './component/Welcome';
import { PhaseContext } from './context/phaseContext';

function App() {
  const { phase } = useContext(PhaseContext); 

  let pageContent;

  switch ( phase ){
    case 'Welcome':
      pageContent = <Welcome />
      break;
    case 'Quiz':
      pageContent = <QuizComponent />
      break;
    default:
      pageContent = <Welcome />
  }


  return (
    <>
      <Header />
      {pageContent}
    </>
  );
}

export default App;
