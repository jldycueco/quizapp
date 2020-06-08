import React, { useState } from 'react';

const questions = [
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the depth of the stress block, a. Assume that the tension steel is yielding.",
    answer: [{text: "135mm", id: 1}, {text: "136mm", id: 2} , {text: "137mm", id: 3}, {text: "138mm", id: 4}],
    correctAnswer: {text: "137mm", id: 1},
    id: "099099",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      'Check if tension steel yields',
    answer: [{text: "True", id: 1}, {text: "False", id: 2}, {text: "N/A", id: 3}, {text: "All of the Above", id: 4}],
    correctAnswer: {text: "True", id: 1},
    id: "183452",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the Nominal Moment Strength",
    answer: [{text: "262 kN-m", id: 1}, {text: "263 kN-m", id: 2}, {text: "264 kN-m", id: 3}, {text: "265kN-m", id: 4}],
    correctAnswer: {text: "263 kN-m", id: 1},
    id: "267908", 
    solution: "Please see link"
  },
];

const QuizComponent = () => {
  const [state, setState] = useState({
    currentQuestion: 0,
    score: 0, 
    selectedId: '',
    answerCorrect: false,
    answered: false
  })

  const handleId = (id) => {
    setState(prevState => ({
      ...prevState, 
      selectedId: id
    }))
  }

  console.log(state.selectedId, state.answerCorrect);

  const nextQuestion = () => {
    setState(prevState => ({
      ...prevState, 
      currentQuestion: prevState.currentQuestion + 1, 
      answerCorrect: false,
      answered: false,
      selectedId: ''
    }));
  }
 
  const checkAnswer = (chosenAnswer, correctAnswer) => {
    if (chosenAnswer === correctAnswer){
      setState(prevState => ({
        ...prevState, 
        score: prevState.score + 1,
        answerCorrect: true,
        answered: true,
      }), 
      setTimeout(() => nextQuestion(), 1100)
      );
  
    } else if (chosenAnswer !== correctAnswer){
      setState(prevState => ({
        ...prevState, 
        answered: false,
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
      answerCorrect: false,
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
                  id = {answer.id}
                  value = {answer.text}
                  onClick = {e => {
                    handleId(answer.id)
                    checkAnswer(e.target.value, questions[state.currentQuestion].correctAnswer.text)
                  }}
                  className = {
                    answer.id === state.selectedId && state.answerCorrect ? 
                    'btnCorrect' : 
                   answer.id === state.selectedId && state.answerCorrect === false ?
                     'btnWrong' : 
                    'btnDefault'
                  }
                >
                  {String.fromCharCode(index + 65)}. {answer.text}
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