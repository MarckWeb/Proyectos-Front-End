import React from 'react'
import './ButtonRandom.scss'
import { MdAutorenew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ButtonRandom = ({ callApiQuoteGarden }) => {
    const navigate = useNavigate()
    const activeRandom = () => {
        navigate('/')
        callApiQuoteGarden()
    }

    return (
        <button
            className='buttonRandom'
            onClick={activeRandom}>
            <span className='buttonRandom__span'>random</span>
            <MdAutorenew className='buttonRandom__icon' />
        </button>
    )
}

export default ButtonRandom