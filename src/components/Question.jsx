import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import QUESTION from '../question';

const Question = ({index,timer,onSkipAnswer,onClickAnswer}) => {
  const[answerState,setAnswerState]=useState({
    selectedAnswer :'',
    isCorrect : '',
  })

  console.log(`Question executed`);
  
  function handleSelectAnswer(answer) {
    
    setAnswerState({
      selectedAnswer : answer,
      isCorrect : null,
    });

    setTimeout(()=>{
      setAnswerState(
        {
          selectedAnswer : answer,
          isCorrect : answer=== QUESTION[index].answers[0]
        }
      )
      setTimeout(()=>{
        onClickAnswer(answer);
      },2000)
    },1000);
 
  }

  let answerStatus = ''

  if(answerState.selectedAnswer ){
    answerStatus = answerState.isCorrect ? 'correct' : 'incorrect';
  }


  return (
    <div id='question'>
                <QuestionTimer  timeout={timer} onTimeout={onSkipAnswer} />
                <h2 >{QUESTION[index].text}</h2>

                <Answers
                    
                    answers={QUESTION[index].answers}
                    selectedAnswer={answerState.selectedAnswer}
                    onClickAnswer={handleSelectAnswer}
                    answerState={answerStatus}
                />

            </div>
  )
}

export default Question