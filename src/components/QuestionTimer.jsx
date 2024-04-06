import React, { useState, useEffect } from 'react'

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=>{
        console.log('setting timeput');
         const timer=setTimeout(onTimeout, timeout);

         return ()=>{
            clearTimeout(timer);
         }
       
    },[timeout,onTimeout]);

    useEffect(() => {
        console.log(`setting interval`);
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);

        //Clean up functions will be executed when that effect function is about to execute again or when the component is unmounted from DOM
       return ()=>{
        clearInterval(interval);
       }
    }, []);

    return (
        <progress id='question-timer' max={timeout} value={remainingTime} />
    )
}

export default QuestionTimer