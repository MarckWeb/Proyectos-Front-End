import React from 'react'
import './ButtonsBox.scss'



const ButtonsBox = ({ nameBtn, title, icon }) => {

    return (
        <section className='button'>
            <p className='button__text'>{title}</p>
            <button className='button__btn'>{icon ? <MdShoppingCartCheckout className='button__btn-icon' /> : ''}

                {nameBtn ? nameBtn : 'Defaul'}</button>
        </section>

    )
}

export default ButtonsBox