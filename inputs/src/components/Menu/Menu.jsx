import React from 'react'
import './Menu.scss'

const Menu = () => {
    return (
        <section className='menu'>
            <h1 className='menu__title'><span>Dev</span>challenges.io</h1>
            <nav className='menu__nav'>
                <ul className='menu__nav-items'>

                    <li className='menu__nav-item'><a href="">Typography</a></li>
                    <li className='menu__nav-item'><a href="">Grid</a></li>
                    <li className='menu__nav-item'><a href="https://buttons-1t24.onrender.com/">Buttons</a></li>
                    <li className='menu__nav-item'><a href="https://inputs.onrender.com/">Inputs</a></li>

                </ul>
            </nav>
        </section>
    )
}

export default Menu