import React, { useEffect, useState } from 'react'
import './Search.scss'

import { MdMyLocation } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'
import SearchPlace from '../SearchPlace/SearchPlace'
import useLocation from '../../Hook/useLocation'
import weatherImageMapping from '../../data/Images'


const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_URL_GEO = import.meta.env.VITE_API_URL_GEO;
const API_URL_WEATHER = import.meta.env.VITE_API_URL_WEATHER;

const Search = ({ weatherPlace, setWeatherPlace, place, setPlace, imperial, setImperial }) => {
    const [toggle, setToggle] = useState(true)
    const [currentDate, setCurrentDate] = useState('');
    const { location } = useLocation();

    const showSearches = () => {
        setToggle(!toggle)
    }

    const searchLocationUser = async () => {
        try {
            const response = await fetch(`${API_URL_GEO}?lat=${location.latitude}&lon=${location.longitude}&limit=5&appid=${API_KEY}`);
            const data = await response.json();
            setPlace(`${data[0].name}, ${data[0].country}`);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const callApiWeather = async () => {

            try {
                const res = await fetch(`${API_URL_WEATHER}?q=${place || 'Madrid'}&appid=${API_KEY}&units=metric`);
                const data = await res.json();
                if (data.cod === 200) {
                    setWeatherPlace(data);
                } else {
                    alert('Location unavailable. Displaying default location: Madrid');
                }
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };
        if (place) {
            callApiWeather();
        }

    }, [place]);

    useEffect(() => {
        if (location) {
            searchLocationUser()
        }
        const date = new Date();
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = months[date.getMonth()];

        const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
        setCurrentDate(formattedDate);
    }, [location])



    return (
        <section className='search'>
            {toggle ? <section className='search__today'>
                <header className='search__today-header ' >
                    <button className='search__today-header-search'
                        onClick={showSearches}
                    >Seach for places</button>
                    <div className='search__today-header-icon'
                        onClick={searchLocationUser}
                    >
                        <MdMyLocation />
                    </div>
                </header>
                <div className="search__today-containerImg">

                </div>
                <figure className='search__today-image'>
                    {weatherPlace && <img src={`../../../public/img/${weatherImageMapping[weatherPlace.weather[0].main]}`} alt="" />}

                </figure>

                <h2 className='search__today-grade'>{imperial ? `${parseInt(weatherPlace && (weatherPlace.main.temp_max * 9 / 5) + 32)}` : `${parseInt(weatherPlace && weatherPlace.main.temp_max)}`}
                    <span>{imperial ? '°F' : '℃'}</span>
                </h2>
                <h3 className='search__today-status'>{weatherPlace && weatherPlace.weather[0].main}</h3>
                <p className='search__today-day'>Today - {currentDate}</p>
                <div className='search__today-location'>
                    <MdLocationPin className='search__today-location-icon' />
                    <p className='search__today-location-place'>{place || 'Madrid'}</p>
                </div>
            </section>
                : <SearchPlace
                    showSearches={showSearches}
                    setPlace={setPlace}
                    place={place || 'Madrid'} />}


        </section>
    )
}

export default Search