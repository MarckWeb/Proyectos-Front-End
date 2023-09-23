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
        </div>
    )
}

export default Location