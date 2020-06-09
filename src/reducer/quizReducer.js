import {
  NEXT_QUESTION, 
  RESET_QUIZ, 
  SAVE_ANSWER, 
  CORRECT_ANSWER, 
  WRONG_ANSWER
} from '../action/type';

const quizReducer = (state, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state, 
        currentQuestion: state.currentQuestion + 1, 
        selectedId: '',
        answerIsCorrect: false,
        isAnswered: false,
        correctAnswer: ''
      }
    case RESET_QUIZ: 
      return {
        ...state,
        currentQuestion: 0, 
        score: 0,
        selectedId: '',
        answerIsCorrect: false,
        isAnswered: false,
        correctAnswer: '',
      }
    case SAVE_ANSWER: 
      return {
        ...state, 
        selectedId: action.payload.id,
        correctAnswer: action.payload.correctAnswer,
      }
    case CORRECT_ANSWER: 
      return {
        ...state,
        score: state.score + 1,
        answerIsCorrect: true,
        isAnswered: true,
      }
    case WRONG_ANSWER: 
      return {
        ...state,
        isAnswered: true,
      }
    default:
      return state
  }
}
 
export default quizReducer;