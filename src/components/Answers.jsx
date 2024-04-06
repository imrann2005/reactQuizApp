import React, { useRef } from 'react'

const Answers = ({answers,selectedAnswer,onClickAnswer,answerState}) => {
   const shuffledAnswers = useRef();


   if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
}
  return (
    <ul id='answers'>

                {shuffledAnswers.current.map((answer) => {
                    const isSelected = answer === selectedAnswer;
                    let cssClass = '';
                    if (answerState === 'answered' && isSelected) {
                        cssClass = 'selected'
                    }
                    if (answerState === 'correct' && isSelected) {
                        cssClass = 'correct';
                    }
                    if (answerState === 'incorrect' && isSelected) {
                        cssClass = 'wrong';
                    }
                    return <li key={answer} className='answer'><button className={cssClass} onClick={() => onClickAnswer(answer)}> {answer}</button></li>
                })}
            </ul>
  )
}

export default Answers