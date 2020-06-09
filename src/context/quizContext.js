import React, { createContext, useReducer } from 'react';
import quizReducer from '../reducer/quizReducer';

export const QuizContext = createContext();

const QuizContextProvider = ({children}) => {
  const initialState = {
    currentQuestion: 0,
    score: 0, 
    selectedId: '',
    answerIsCorrect: false,
    isAnswered: false,
    correctAnswer: ''
  };

  const [state, dispatch] = useReducer(quizReducer, initialState)
  
  return ( 
    <QuizContext.Provider value ={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
   );
}
 
export default QuizContextProvider;