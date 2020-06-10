import {
  WELCOME_PHASE,
  QUIZ_PHASE, 
  QUIZ_LENGTH
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

export const handleSliderChange = (dispatch , e) => {
  dispatch({
    type: QUIZ_LENGTH,
    payload: e.target.value,
  })
}


