import React, { useEffect, useState } from 'react'
import './AuthorCite.scss'

const AuthorCite = ({ author }) => {
    const [citesAuthor, setCitesAuthor] = useState('')

    const filterForAuthors = async () => {
        const responde = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`)
        const dataAuthor = await responde.json()
        setCitesAuthor(dataAuthor.data)
    }

    useEffect(() => {
        filterForAuthors()
    }, [])

    return (
        <div className='cites'>
            <h1 className='cites__author'>{author}</h1>
            <section className='cites__content'>
                {citesAuthor ? citesAuthor.map(cites => {
                    return <>
                        <blockquote className='cite__content'>
                            {cites.quoteText}
                        </blockquote>
                    </>
                }) : ''}
            </section>
        </div>
    )
}

export default AuthorCite