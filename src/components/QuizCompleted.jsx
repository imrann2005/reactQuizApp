import React from 'react'
import quizCompletredImg from '../assets/quiz-complete.png'
import QUESTION from '../question.js'

const QuizCompleted = ({ answers }) => {
  const QuizAnswers = answers;
  let correctAnswers = QuizAnswers.filter((answer, index) => answer === QUESTION[index].answers[0]);
  let skippedAnswers = QuizAnswers.filter((answer, index) => answer === null);
  let wrongAnswers = QuizAnswers.filter((answer, index) => (answer !== null && answer !== QUESTION[index].answers[0]));
  console.log(correctAnswers);
  const noOfCorrect = correctAnswers.length

  const answerStyle = (answer) => {
    const found = correctAnswers.find((ca) => ca === answer);
    if (found) {
      return 'user-answer correct'
    }
    else return 'user-answer wrong'
  }

  return (
    <div id='summary'>
      <img src={quizCompletredImg} />
      <h2>Quiz Completed</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{((noOfCorrect / QUESTION.length) * 100).toFixed(0)}%</span>
          <span className='text'>Correctly Answered</span>
        </p>
        <p>
          <span className='number'>{((wrongAnswers.length / QUESTION.length) * 100).toFixed(0)}%</span>
          <span className='text'>InCorrectly Answered</span>
        </p>
        <p>
          <span className='number'>{((skippedAnswers.length / QUESTION.length) * 100).toFixed(0)}%</span>
          <span className='text'>Skipped</span>
        </p>

      </div>
      <ol>
        {
          QuizAnswers.map((answer, index) => {
            return <li key={QUESTION[index].id}>
              <h3>{QUESTION[index].id}</h3>
              <p className='question'>{QUESTION[index].text}</p>
              <p className={answerStyle(answer)}>{answer===null?<span className='user-answer skipped'>You Skipped!</span>:answer}</p>
            </li>
          })
        }
      </ol>
    </div>
  )
}

export default QuizCompleted