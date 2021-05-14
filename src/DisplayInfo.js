import React, { useState } from 'react'
import './index.css'

const DisplayInfo = (props) => {

    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState('')

    const renderedTitle = props.question.map(info => {
        return (
            info.category.title
        )
    })


    const renderedQuestion = props.question.map(info => {
        return (
            info.question
        )
    })


    const displayAnswer = props.question.map(info => {
        return (
            (info.answer)
        )
    })

    const DisplayAnswer = () => {
        return (
            setAnswer(displayAnswer)
        )
    }

    const addScore = () => {
        setScore(score + 100)
        setAnswer('')
    }

    const subScore = () => {
        setScore(score - 100)
        setAnswer('')
    }

    const resetScore = () => {
        setScore(0)
        setAnswer('')
    }



    return (
        <div id='allcontent'>
            <div className='ui cards'>
                <div className='card'>
                    <h1 style={{ textAlign: 'center' }}>SCORE: {score}</h1>
                    <div className='content'>
                        <button onClick={props.info} >Random Question</button>
                    </div>
                    <br />
                    <div>
                        <button className='ui basic green button' onClick={addScore}>Increase</button>
                        <button className='ui basic red button' onClick={subScore}>Decrease</button>
                        <button className='ui basic red button' onClick={resetScore}>Reset</button>
                    </div>
                    <br />
                    <div>
                        <p><b>Category:</b> {renderedTitle}</p>
                        <p><b>Question:</b> {renderedQuestion}</p>
                        <p><b>Answer:</b> {answer}</p>
                        <button onClick={DisplayAnswer}>Click For Answer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayInfo