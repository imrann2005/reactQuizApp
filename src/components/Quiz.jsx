import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import QUESTIONS from '../question';
import QuizCompleted from './QuizCompleted';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Question from './Question';
const TIMER = 10000;

const Quiz = () => {

    //const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const shuffledAnswers = useRef();
    const [userAnswers, setUserAnswers] = useState([]);
  

    const currentQuestionIndex =  userAnswers.length;


    const quizIsComplete = currentQuestionIndex == QUESTIONS.length;
    //While working in react you should manage as little state as possible, derive most of the state values
    //Shuffle the answers order




    const handleClickAnswer = useCallback(function handleClickAnswer(answer) {
        
        setUserAnswers((prev) => {
            return [
                ...prev,
                answer
            ]
        })

       


    }, )

    // useEffect(() => {
    //     console.log(userAnswers);
    // }, [userAnswers]);

    const handleSkipAnswer = useCallback(
        () => { handleClickAnswer(null) }
        , [handleClickAnswer]);


    if (quizIsComplete) {
        return <QuizCompleted answers={userAnswers}/>
    }




    // const answerStyle = {
    //     backgroundColor: answerState === 'correct' ? 'green' : answerState === 'incorrect' ? 'orange' : undefined,
    // }

    return (

        <div id='quiz'>

            <Question 
                key={currentQuestionIndex}
                
                index={currentQuestionIndex}
                onSkipAnswer={handleSkipAnswer}
               
                
                onClickAnswer={handleClickAnswer}
                timer={TIMER}
                
            />

        </div>
    )
}

export default Quiz;