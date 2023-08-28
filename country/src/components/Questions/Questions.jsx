import React, { useEffect, useState } from 'react';
import './Questions.scss'

import Person from '../../assets/svg/undraw_adventure_4hum 1.svg'
import { MdCheckCircleOutline } from 'react-icons/md'
import { MdOutlineCancel } from 'react-icons/md'
import Results from '../Results/Results';

const Questions = () => {
    const [dataRandom, setDataRandom] = useState([]);
    const [countrySelected, setCountrySelected] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [isIncorrrect, setIsIncorrect] = useState(null)
    const [count, setCount] = useState(0)
    const [points, setPoints] = useState(0)

    const callApi = async () => {
        setCount(count + 1)
        setCountrySelected(null)
        setIsIncorrect(null)
        const response = await fetch('https://restcountries.com/v3.1/all')
        const dataApi = await response.json()
        const newData = [...dataApi].sort(() => Math.random() - 0.5).slice(0, 4);
        setDataRandom(newData)
        setCorrectAnswerIndex(Math.floor(Math.random() * 4));
    }


    useEffect(() => {
        callApi()
    }, []);

    const letters = ['A', 'B', 'C', 'D'];

    const optionSelected = (index) => {
        if (index === correctAnswerIndex) {
            setCountrySelected(index);
            setPoints(points + 1)

        } else {
            setIsIncorrect(index)
            setTimeout(() => {
                setCountrySelected(correctAnswerIndex);
            }, 1000)
        }
    };

    return (
        <div className='questionnaire'>

            <h1 className='questionnaire__title'>Country quiz</h1>
            {count <= 4 ? <section className='questionnaire__box'>
                <img className='questionnaire__box-image' src={Person} alt="" />
                {count <= 2 ? dataRandom.length > 0 && (
                    <p className='questionnaire__box-question'>
                        {dataRandom[correctAnswerIndex]?.capital[0]} is the capital of</p>
                ) : <p className='questionnaire__box-question2'>
                    <img className='questionnaire__box-question2-image' src={dataRandom[correctAnswerIndex]?.flags.png} alt="" /> <br />
                    Which country does this flag belong to?
                </p>}

                <ul className='questionnaire__box-answers'>
                    {dataRandom.map((item, index) => {
                        const isCurrentAnswer = countrySelected === index;
                        const isIncorrectAnswer = isIncorrrect === index;
                        return (
                            <li
                                key={index}
                                className={`questionnaire__box-answer ${isCurrentAnswer ? 'correct' : ''} ${isIncorrectAnswer ? 'incorrect' : ''}`}
                                onClick={() => optionSelected(index)}
                            >
                                <span>{letters[index]}</span>
                                {item.name.common}
                                {isCurrentAnswer && !isIncorrectAnswer ? (
                                    <MdCheckCircleOutline className='questionnaire__box-answer-icon' />
                                ) : (
                                    isIncorrectAnswer && (
                                        <>
                                            <MdOutlineCancel className='questionnaire__box-answer-icon2' />
                                        </>
                                    )
                                )}
                            </li>
                        );
                    })}
                </ul>

                {countrySelected !== null ?
                    <button className='questionnaire__box-button' onClick={callApi}>
                        Next
                    </button> : ''}
            </section> : <Results points={points}
                setCount={setCount}
                setPoints={setPoints} />}
        </div>
    );
}

export default Questions