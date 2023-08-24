import React, { useContext, useEffect } from 'react'
import './Properties.scss'
import DataContext from '../DataContext/DataContext'

import { MdStar } from 'react-icons/md'

const Properties = () => {
    const { data, setData } = useContext(DataContext)

    const callApiProperties = async () => {
        const res = await fetch('src/db/stays.json')
        const datajson = await res.json()
        setData(datajson)
    }

    useEffect(() => {
        callApiProperties()
    }, [])

    return (
        <article className='properties'>
            <header className='properties__header'>
                <h2 className='properties__header-title'>Stays in Finland</h2>
                <p className='properties__header-text'>12+ stays</p>
            </header>

            <section className='properties__container'>
                {data ? data.map((property, i) => {
                    return (
                        <article key={i} className='properties__gallery'>
                            <figure className='properties__gallery-figure'>
                                <img src={property.photo} alt="" />
                            </figure>
                            <ul className='properties__gallery-details'>
                                {property.superHost === true ? <li className='properties__gallery-details-host'>SUPER HOST</li> : ''}
                                <li className='properties__gallery-details-item'>{property.type} {`.${property.beds} beds`}</li>
                                <li className='properties__gallery-details-item'>
                                    <MdStar className='properties__gallery-details-icon' />
                                    {property.rating}</li>
                            </ul>
                            <p className='properties__gallery-title'>{property.title}</p>
                        </article>
                    )
                }) : ''}
            </section>

        </article>
    )
}

export default Properties