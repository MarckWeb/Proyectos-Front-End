import React, { useState, useContext } from 'react'
import './Header.scss'
import DataContext from '../DataContext/DataContext'

import { MdSearch } from 'react-icons/md'
import Logo from '../../assets/image/logo.svg'
import BoxFilter from '../BoxFilter/BoxFilter'

const Header = () => {

    const { data } = useContext(DataContext)
    const [toggleSearch, setToggleSearch] = useState(false)

    const showBoxFilter = () => {
        setToggleSearch(!toggleSearch)
    }
    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt="" />
            <div className='header__search' onClick={showBoxFilter}>
                <button className='header__search-btn'>{data[0] ? `${data[0]?.city}, Finland` : 'Helsinki, Finland'}</button>
                <button className='header__search-btn'> Add guest</button>
                <button className='header__search-btn'>
                    <MdSearch className='header__search-btn-icon' />
                </button>

            </div>

            <BoxFilter
                toggleSearch={toggleSearch}
                showBoxFilter={showBoxFilter} />
        </header>
    )
}

export default Header