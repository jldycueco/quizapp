import {
  NEXT_QUESTION, 
  RESET_QUIZ, 
  SAVE_ANSWER, 
  CORRECT_ANSWER, 
  WRONG_ANSWER
} from '../action/type';

export const saveAnswer = (dispatch, id, correctAnswer) => {
  dispatch({
    type: SAVE_ANSWER,
    payload: {
      id,
      correctAnswer,
    }
  });
};

export const nextQuestion = (dispatch) => {
  dispatch({
    type: NEXT_QUESTION,
  });
};

export const resetQuiz = (dispatch) => {
  dispatch({
    type: RESET_QUIZ,
  });
}

export const handleCorrectAnswer = (dispatch) => {
  dispatch({
    type: CORRECT_ANSWER,
  })
}

export const handleWrongAnswer = (dispatch) => {
  dispatch({
    type: WRONG_ANSWER,
  })
}