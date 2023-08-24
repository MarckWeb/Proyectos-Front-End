import React from 'react'
import './Count.scss'

const Count = ({
    title,
    ages,
    id,
    handleCountChange,
    counter }) => {

    return (
        <section className='count'>
            <p className='count__title'>{title}</p>
            <p className='count__age'>{ages}</p>
            <div className='count__btns' id={id}
                onClick={handleCountChange}>
                <button
                    className='count__btns-item count__btns-substring'
                    onClick={() => counter.decrement()}>-</button>

                <span
                    className='count__btns-span'>
                    {counter.count}
                </span>

                <button
                    className='count__btns-item count__btns-add'
                    onClick={() => counter.increment()}>+</button>
            </div>
        </section>
    )
}

//noesta tomando el guest el total

export default Count