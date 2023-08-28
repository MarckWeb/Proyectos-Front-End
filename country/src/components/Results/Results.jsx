import React from 'react'
import './Results.scss'

import winner from '../../assets/svg/undraw_winners_ao2o 2.svg'

const Results = ({ points, setCount, setPoints }) => {

    const tryAgain = () => {
        setCount(0)
        setPoints(0)
    }
    return (
        <section className='results'>
            <img src={winner} alt="" />
            <h2>Results</h2>
            <p>You got <span>{points}</span> correct answers</p>
            <button onClick={tryAgain}> Try again</button>
        </section>
    )
}

export default Results