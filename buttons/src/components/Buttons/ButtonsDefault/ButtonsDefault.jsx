import React from 'react'
import './ButtonsDefault.scss'
import { MdShoppingCartCheckout } from 'react-icons/md';

const ButtonsDefault = ({ title }) => {
    return (
        <section className='default'>
            <p className='default__text'>{title}</p>
            <button className='default__btn'><MdShoppingCartCheckout className='default__btn-icon' />Defaul</button>
        </section>
    )
}

export default ButtonsDefault