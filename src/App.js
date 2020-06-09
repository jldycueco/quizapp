import React from 'react';
import './App.css';
import QuizComponent from './component/Quiz';
import QuizContextProvider from './context/quizContext';

function App() {
  return (
    <>
      <QuizContextProvider>
        <QuizComponent />
      </QuizContextProvider>
    </>
  );
}

export default App;
