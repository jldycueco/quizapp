import React, { useState } from 'react';

const questions = [
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the depth of the stress block, a. Assume that the tension steel is yielding.",
    answer: ["135mm",  "136mm",  "137mm",   "138mm"],
    correctAnswer:  "137mm",
    id: "099099",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      'Check if tension steel yields',
    answer: [ "True",  "False",  "N/A",   "All of the Above"],
    correctAnswer:  "True",
    id: "183452",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the Nominal Moment Strength",
    answer: [ "262 kN-m",  "263 kN-m",  "264 kN-m",   "265kN-m"],
    correctAnswer:  "263 kN-m",
    id: "267908", 
    solution: "Please see link"
  },
];

const QuizComponent = () => {
  const [state, setState] = useState({
    currentQuestion: 0,
    score: 0, 
    selectedId: '',
    answerIsCorrect: false,
    isAnswered: false,
    correctAnswer: ''
  })

  const handleAnswer = (id, correctAnswer) => {
    setState(prevState => ({
      ...prevState, 
      selectedId: id,
      correctAnswer
    }))
  }

  const nextQuestion = () => {
    setState(prevState => ({
      ...prevState, 
      currentQuestion: prevState.currentQuestion + 1, 
      answerIsCorrect: false,
      isAnswered: false,
      selectedId: '',
      correctAnswer: ''
    }));
  }
 
  const checkAnswer = (chosenAnswer, correctAnswer) => {
    if (chosenAnswer === correctAnswer){
      setState(prevState => ({
        ...prevState, 
        score: prevState.score + 1,
        answerIsCorrect: true,
        isAnswered: true,
      }), 
      setTimeout(() => nextQuestion(), 1100)
      );
  
    } else if (chosenAnswer !== correctAnswer){
      setState(prevState => ({
        ...prevState, 
        isAnswered: true,
      }), 
      setTimeout(() => nextQuestion(), 1100)
      );
    }
  }

  const Reset = () => {
    setState(prevState => ({
      ...prevState, 
      currentQuestion: 0, 
      score: 0,
      selectedId: '',
      answerIsCorrect: false,
    }));
  }

  return (
    <>
      {state.currentQuestion < questions.length ? (
        <>
          <div>Your Score is {state.score}/{questions.length}</div>
          <div>Question {state.currentQuestion + 1}</div>
          <div>
            <p>{questions[state.currentQuestion].question}</p>
            <img 
              src={questions[state.currentQuestion].img} 
              alt={questions[state.currentQuestion].img}
            />
            <ul>
              {questions[state.currentQuestion].answer.map((answer, index) => (
                <button 
                  key={index}
                  id = {answer}
                  value = {answer}
                  onClick = {e => {
                    handleAnswer(answer, questions[state.currentQuestion].correctAnswer)
                    checkAnswer(e.target.value, questions[state.currentQuestion].correctAnswer)
                  }}
                  className = {
                    answer === state.selectedId && state.answerIsCorrect ? 
                    'btnCorrect' : 
                   answer === state.selectedId && state.answerIsCorrect === false ?
                     'btnWrong' : 
                     answer === state.correctAnswer && state.isAnswered ? 'btnCorrect' :
                    'btnDefault'
                  }  
                >
                  {String.fromCharCode(index + 65)}. {answer}
                </button>
              ))}
            </ul>
          </div>
        </>
      ): 
      <div>
        <button onClick= {() => Reset()}>Retry</button>
      </div>
      }
    </>
  );
}

export default QuizComponent;