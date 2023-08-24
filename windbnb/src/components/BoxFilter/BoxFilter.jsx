import React, { useEffect, useState, useContext } from 'react'
import './BoxFilter.scss'

import DataContext from '../../components/DataContext/DataContext'
import { MdClose } from 'react-icons/md'
import { MdFmdGood } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'
import Inputs from './Inputs/Inputs'
import Count from './Count/Count'
import useCounter from '../../Hooks/useCounter'

const BoxFilter = ({ toggleSearch, showBoxFilter }) => {

    const { setData } = useContext(DataContext)

    const adultosCounter = useCounter(0);
    const childCounter = useCounter(0);

    const [showBoxSearch, setShowBoxSearch] = useState(null)
    const [inputLocation, setInputLocation] = useState(null)
    const [inputGuest, setInputGuest] = useState(null);

    useEffect(() => {
        setInputGuest(adultosCounter.count + childCounter.count);
    }, [adultosCounter.count, childCounter.count]);

    const filterProperties = async () => {
        const res = await fetch('src/db/stays.json')
        const datajson = await res.json()
        const getCity = inputLocation.split(',')[0]
        const filterData = datajson.filter(item => item.city === getCity && item.maxGuests > inputGuest
        )
        setData(filterData)
    }

    return (
        <section className={toggleSearch ? 'boxFilter-active' : 'boxFilter'}>
            <header className='boxFilter__header'>
                <p className='boxFilter__header-text'>Edit your search</p>
                <MdClose className='boxFilter__header-icon'
                    onClick={() => showBoxFilter(!toggleSearch)} />
            </header>

            <section className='boxFilter__search '>
                <Inputs
                    name='location'
                    title='LOCATION'
                    placeholder='Helsinki, Finland'
                    value={inputLocation}
                    setShowBoxSearch={setShowBoxSearch}
                />

                <Inputs
                    name='guest'
                    title='GUEST'
                    placeholder='Add guests'
                    value={`${inputGuest} guest`}
                    setShowBoxSearch={setShowBoxSearch} />

            </section>

            <section>
                <ul className={showBoxSearch ? 'boxFilter__citys-active' : 'boxFilter__citys'}>
                    <li className='boxFilter__citys-item' >
                        <MdFmdGood className='boxFilter__citys-icon' />
                        <span onClick={(e) => setInputLocation(e.target.innerText)} className='boxFilter__citys-text'>Helsinki, Finland</span>
                    </li>
                    <li className='boxFilter__citys-item' >
                        <MdFmdGood className='boxFilter__citys-icon' />
                        <span onClick={(e) => setInputLocation(e.target.innerText)} className='boxFilter__citys-text'>Turku, Finland</span>
                    </li>
                    <li className='boxFilter__citys-item' >
                        <MdFmdGood className='boxFilter__citys-icon' />
                        <span onClick={(e) => setInputLocation(e.target.innerText)} className='boxFilter__citys-text'>Oulu, Finland</span>
                    </li>
                    <li className='boxFilter__citys-item' >
                        <MdFmdGood className='boxFilter__citys-icon' />
                        <span onClick={(e) => setInputLocation(e.target.innerText)} className='boxFilter__citys-text'>Vaasa, Finland</span>
                    </li>
                </ul>
                <article className={showBoxSearch ? 'boxFilter__count' : 'boxFilter__count-active'}>
                    <Count
                        title='Adults'
                        id='adults'
                        ages='Ages 13 or above'
                        counter={adultosCounter}
                    />

                    <Count
                        title='Children'
                        id='children'
                        ages='Ages 2-12'
                        counter={childCounter}
                    />
                </article>
            </section>

            <button
                className='boxFilter__button boxFilter__button2'
                onClick={() => {
                    filterProperties();
                    showBoxFilter(!toggleSearch);
                }}>
                <MdSearch className='boxFilter__button-icon' />
                Search

            </button>
        </section>
    )
}

export default BoxFilter