import React from 'react'
import './ButtonMix.scss'

const ButtonMix = ({ title, nameBtn }) => {
    return (
        <section className='mix'>
            <p className='mix__text'>{title}</p>
            <button className='mix__btn'>
                {nameBtn ? nameBtn : 'Defaul'}
            </button>
        </section>
    )
}

export default ButtonMix