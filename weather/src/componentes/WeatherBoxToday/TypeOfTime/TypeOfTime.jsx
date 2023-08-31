import React from 'react'
import './TypeOfTime.scss'

import { MdNearMe } from 'react-icons/md'

const TypeOfTime = ({ type, number, extend, icon, points, bar }) => {

    const barWidth = `${number}%`;
    return (
        <section className='types'>
            <p className='types__title'>{type}</p>
            <p className='types__extend'>{number} <span>{extend}</span></p>
            <div className='types__others'>
                {icon ? <div className='types__others-box'> <MdNearMe className='types__others-icon' /></div> : ''}
                {icon && <span>{points}</span>}
                {bar &&
                    <div className='types__others-barBox'>
                        <ul className='types__others-numbers'>
                            <li>0</li>
                            <li>50</li>
                            <li>100</li>
                        </ul>
                        <div className='types__others-bar'>
                            <div className='types__others-bar' style={{ width: barWidth }}></div>
                        </div>
                        <p className='types__others-percentage'>%</p>

                    </div>
                }
            </div>
        </section>
    )
}

export default TypeOfTime