import React, { useState } from 'react'
import DisplayInfo from './DisplayInfo'

const App = () => {

    const [question, setQuestion] = useState([])


    const getInfo = () => {
        fetch('http://jservice.io/api/random')
            .then(response => response.json())
            .then(data => setQuestion((data)))
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>WELCOME TO JEOPARDY</h1>

            <DisplayInfo question={question} info={getInfo} />
        </div>
    )
}

export default App