import React, { useEffect, useState } from 'react'
import './WeatherBoxToday.scss'

import weatherImageMapping from '../../data/Images'
import TypeOfTime from './TypeOfTime/TypeOfTime'

const API_KEY_CROSSING = import.meta.env.VITE_CROSSING_API_KEY;

const WeatherBoxToday = ({ weatherPlace, place, imperial, setImperial }) => {
    const [dataForDays, setDataForDays] = useState(null)

    const callApiWeatherDays = async (valor) => {
        const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=${valor || 'metric'}&key=${API_KEY_CROSSING}&contentType=json`)
        const data = await res.json()
        setDataForDays(data.days.slice(1, 6))
    }

    useEffect(() => {
        callApiWeatherDays()
    }, [place])

    const formatDate = (dateString) => {
        const options = { weekday: 'short', day: '2-digit', month: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-UK', options);
    };

    return (
        <div className='days'>
            <ul className='days__temperature'>
                <li onClick={() => setImperial(false)}>℃</li>
                <li onClick={() => setImperial(true)}>℉</li>
            </ul>
            <section className='days__forTime'>
                {dataForDays ? dataForDays.map((days, i) => {
                    return <article key={i} className='cardDays'>
                        <p className='cardDays__day'>{formatDate(days.datetime)}</p>
                        <figure className='cardDays__figure'>
                            <img className='cardDays__figure-image' src={`weather/src/assets/img/${weatherImageMapping[days.conditions.split(', ')[0]]}`} alt="" />
                        </figure>
                        <p className='cardDays__grade'><span>{imperial ? `${parseInt((days.tempmax * 9 / 5) + 32)}°F` : `${parseInt(days.tempmax)}°C`}</span><span>{imperial ? `${parseInt((days.tempmin * 9 / 5) + 32)}°F` : `${parseInt(days.tempmin)}°C`}</span></p>
                    </article>
                }) : ''}
            </section>
            <h3 className='days__title'>Today’s Hightlights </h3>

            <section className='days__statusOfDay'>

                <TypeOfTime
                    type='Wind status'
                    number={weatherPlace?.wind.speed}
                    extend='mph'
                    icon={true}
                    points='WSW' />

                <TypeOfTime
                    type='Humidity'
                    number={weatherPlace?.main.humidity}
                    extend='% '
                    icon={false}
                    bar={true} />

                <TypeOfTime
                    type='Visibility'
                    number={((weatherPlace?.visibility * 0.62137119) / 1000).toFixed(1)}
                    extend='miles '
                />

                <TypeOfTime
                    type='Air Pressure'
                    number={weatherPlace?.main.pressure}
                    extend='mb' />
            </section>

            <p className='days__footer'>created by <a href="https://www.linkedin.com/in/david-marca/">David-MarckWeb</a> - devChallenges.io</p>
        </div>
    )
}

export default WeatherBoxToday