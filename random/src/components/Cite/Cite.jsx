import React, { useState } from 'react'
import './Cite.scss'

import { MdEast } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Cite = ({ data }) => {
    return (
        <>
            {data ? data.map((cite, i) => {
                return <section
                    key={i}
                    className='cite'>
                    <blockquote className='cite__content'>
                        {cite.quoteText}
                    </blockquote>
                    <Link className='cite__content-link' key={cite.quoteAuthor} to={`/${cite.quoteAuthor}`}>
                        <div
                            className='cite__author'>
                            <h3 className='cite__author-name'>{cite.quoteAuthor}</h3>
                            <p className='cite__author-genre'>{cite.quoteGenre}</p>
                            <MdEast className='cite__author-icon' />
                        </div>
                    </Link>

                </section>
            }) : ''}
        </>
    )

}

export default Cite