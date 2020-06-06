import React, { useState } from 'react';

const questions = [
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the depth of the stress block, a. Assume that the tension steel is yielding.",
    answer: ["137mm", "138mm", "139mm", "140mm"],
    correct_answer: "137mm",
    id: "099099",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      'Check if tension steel yields',
    answer: ["True", "False", "N/A", "All of the Above"],
    correct_answer: "True",
    id: "183452",
    solution: "Please see link"
  },
  {
    img: "https://i.imgur.com/hAd5IM3.png",
    question:
      "Compute the Nominal Moment Strength",
    answer: ["263 kN-m", "264 kN-m", "262 kN-m", "265kN-m"],
    correct_answer: "263 kN-m",
    id: "267908", 
    solution: "Please see link"
  },
];

const QuizComponent = () => {
  const [state, setState] = useState({
    currentQuestion: 0,
    score: 0, 
    chosenAnswer: ''
  })

  const handleAnswer = (value) => {
    setState(prevState => ({
      ...prevState, 
      chosenAnswer: value
    }))
  }

  const checkAnswer = (chosenAnswer, correctAnswer) => {
    // if(chosenAnswer === ''){
    //   return alert('Please choose an answer')
    // }

    if (chosenAnswer === correctAnswer){
      setState(prevState => ({
        ...prevState, 
        currentQuestion: prevState.currentQuestion + 1, 
        score: prevState.score + 1,
        chosenAnswer: ''
      }));
      return alert("Correct");
  
    } else if (chosenAnswer !== correctAnswer){
      setState(prevState => ({
        ...prevState, 
        currentQuestion: prevState.currentQuestion + 1, 
        chosenAnswer: ''
      }))
      return alert("Incorrect");
    }
  }

  const Reset = () => {
    setState(prevState => ({
      ...prevState, 
      currentQuestion: 0, 
      score: 0 ,
      chosenAnswer: ''
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
                  value = {answer}
                  id = {answer.id}
                  onClick = {e => {
                    handleAnswer(e.target.value);
                    checkAnswer(e.target.value, questions[state.currentQuestion].correct_answer)
                  }}
                >
                  {answer}
                </button>
              ))}
            </ul>
            {/* <button 
              onClick = {
                () => checkAnswer(state.chosenAnswer, questions[state.currentQuestion].correct_answer)
              }>
              Next
            </button> */}
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