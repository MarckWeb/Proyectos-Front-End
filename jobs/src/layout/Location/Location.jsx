import React from 'react'
import './Location.scss'

import Input from '../../components/Input/Input'
import { BiWorld } from 'react-icons/bi'
import { BiSearchAlt2 } from 'react-icons/bi'

const Location = ({ country, setCountry, city, setCity, callApi }) => {
    const searchForCityAndCountry = () => {
        callApi()
    }
    return (
        <div className='location'>
            <p className='location__title'>location</p>
            <div className='location__inputBox'>
                <BiWorld className='location__inputBox-icon' />
                <Input
                    className='location__inputBox-input'
                    type='text'
                    name='search'
                    id='search'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />

                <select className='location__inputBox-select' name="country" id=" country" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value=''>Country</option>
                    <option value="es">Spain</option>
                    <option value="fr">France</option>
                    <option value="gb">England</option>
                    <option value="us">EEUU</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="de">Alemania</option>
                </select>
                <button className='location__inputBox-btn' onClick={searchForCityAndCountry}>
                    <BiSearchAlt2 className='location__inputBox-btn-icon' />
                </button>
            </div>
            <ul className='location__place'>
                <li className='location__place-list'>
                    <Input
                        className='location__place-list-input'
                        type='radio'
                        name='city'
                        id='cityOne' />
                    <span className='location__place-span'>London</span>
                </li>

                <li className='location__place-list'>
                    <Input
                        className='location__place-list-input'
                        type='radio'
                        name='city'
                        id='cityTwo' />
                    <span className='location__place-span'>Amsterdan</span>
                </li>

                <li className='location__place-list'>
                    <Input
                        className='location__place-list-input'
                        type='radio'
                        name='city'
                        id='cityThree' />
                    <span className='location__place-span'>New York</span>
                </li>

                <li className='location__place-list'>
                    <Input
                        className='location__place-list-input'
                        type='radio'
                        name='city'
                        id='cityFour' />
                    <span className='location__place-span'>Berlin</span>
                </li>
            </ul>
        </div>
    )
}

export default Location