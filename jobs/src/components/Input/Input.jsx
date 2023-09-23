import React from 'react'
import './Input.scss'

const Input = ({ type, name, id, placeholder, className, onChange }) => {
    return (
        <input
            className={className}
            type={type}
            autoComplete='off'
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange} />
    )
}

export default Input