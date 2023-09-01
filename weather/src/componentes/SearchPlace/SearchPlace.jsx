import React, { useEffect, useState } from 'react'
import './SearchPlace.scss'

import { MdClose } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'
import { MdChevronRight } from 'react-icons/md'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const SearchPlace = ({ showSearches, setPlace, place }) => {
    const [placeInput, setPlaceInput] = useState('');
    const [placesFound, setPlacesFound] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${placeInput}&limit=5&appid=${API_KEY}`)
            const data = await response.json();
            setPlacesFound(data)


        } catch (error) {
            console.error("Fetch Error:", error);
        }
    };

    const callApiOfPlace = async (e) => {
        e.preventDefault()
        fetchData()
        setPlaceInput('')
    }

    const selectedPlace = (e) => {
        const inputString = e.target.textContent;
        const firstWordBeforeComma = inputString.split(',')[0].trim();
        const secondWordBeforeComma = inputString.split(',')[2].trim().toLowerCase();
        setPlace(`${firstWordBeforeComma}, ${secondWordBeforeComma}`)
        showSearches()
    }
    return (
        <section className='search__place'>
            <MdClose
                className='search__place-icon'
                onClick={showSearches} />

            <form className='search__place-from' action="" onSubmit={callApiOfPlace}>
                <div className='search__place-input'>
                    <MdSearch className='search__place-input-icon' />
                    <input
                        type="text"
                        placeholder='search location'
                        value={placeInput}
                        onChange={(e) => setPlaceInput(e.target.value)} /></div>
                <input className='search__place-submit' type="submit" value="Search" />
            </form>

            <ul className='search__place-countrys' onClick={selectedPlace}>
                {placesFound ? placesFound.map((place, i) => {
                    return <li key={i} className='search__place-country'
                    ><span>{`${place.name}, ${place.state ? place.state : ''}, ${place.country}`}</span> <MdChevronRight className='search__place-country-icon' /></li>
                }) : ''}

            </ul>


        </section>
    )
}

export default SearchPlace