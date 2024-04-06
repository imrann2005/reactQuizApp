import React from 'react'
import quizLogoImg from '../assets/quiz-logo.png'

const Header = () => {
  return (
    <header>
        <img src={quizLogoImg} alt='quiz-logo'/>
        <h1>React Quiz App</h1>
    </header>
  )
}

export default Header