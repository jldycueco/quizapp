import {
  WELCOME_PHASE,
  QUIZ_PHASE, 
  QUIZ_LENGTH,
  } from '../action/type';

const phaseReducer = (state, action) => {
  switch (action.type) {
    case WELCOME_PHASE: 
      return {
        ...state,
        phase: action.payload,   
      }
    case QUIZ_PHASE: 
      return {
        ...state,
        phase: action.payload,
      }
    case QUIZ_LENGTH: 
      return {
        ...state,
        questionLength: action.payload,
      } 
    default:
      return state;
  }
}

export default phaseReducer;