import React, { useEffect, useState } from 'react'
import './Search.scss'

import { MdWorkOutline } from 'react-icons/md'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Search = ({ job, setJob, callApi }) => {

    const searchJobs = () => {
        callApi()

    }
    return (
        <div className='searchBackground'>

            <div className='searchBackground__box'>
                <div>
                    <MdWorkOutline className='searchBackground__box-icon' />
                    <Input
                        className='searchBackground__box-input'
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Title'
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                    />
                </div>

                <Button
                    title='Search'
                    onClick={searchJobs} />
            </div>
        </div>
    )
}

export default Search