import React, { useState } from 'react'
import './Inputs.scss'

const Inputs = ({
    name,
    title,
    placeholder,
    value,
    setShowBoxSearch,
    onChange,

}) => {

    const toogleSearch = (e) => {
        if (e.target.id === 'location') {
            setShowBoxSearch(true)
        }

        if (e.target.id === 'guest') {
            setShowBoxSearch(false)
        }
    }

    return (
        <div className='boxInput' onClick={toogleSearch}>
            <label className='boxInput__label' htmlFor={name}>{title}</label>
            <input
                className='boxInput__input'
                type="text"
                name={name}
                id={name}
                value={value ? value : ''}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Inputs