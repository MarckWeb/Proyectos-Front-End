import React from 'react'
import './InputBox.scss'

import { MdCall } from 'react-icons/md'
import { MdEnhancedEncryption } from 'react-icons/md'

const InputBox = ({ title, text, info, icons, icons2 }) => {
    return (
        <section className='inputBox'>
            <p className='inputBox__title'>{title}</p>
            <div className='inputBox__container'>
                <label className='inputBox__label' htmlFor="text">Label</label>
                <input className='inputBox__input' type="text" placeholder={text ? text : 'Placeholder'} name='text' id='text' />
                {icons ? <MdCall className='inputBox-icon' /> : ''}
                {icons2 ? <MdEnhancedEncryption className='inputBox-icon' /> : ''}
            </div>
            <p className='inputBox__info'>{info ? info : ''}</p>

        </section>
    )
}

export default InputBox