import React from 'react'
import './Button.scss'

const Button = ({ title, onClick }) => {
    return (
        <button className='btn' onClick={onClick}>{title}</button>
    )
}

export default Button