import {
  WELCOME_PHASE,
  QUIZ_PHASE, 
  } from './type';

export const goToQuiz = (dispatch) => {
  dispatch({
    type: QUIZ_PHASE,
    payload: 'Quiz',
  });
};

export const goToWelcome = (dispatch) => {
  dispatch({
    type: WELCOME_PHASE,
    payload: 'Welcome',
  });
};


