import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'

import { BiWorld } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Search from '../../layout/Search/Search'
import Location from '../../layout/Location/Location'
import Input from '../../components/Input/Input'
import Company from '/img/job.jpg'

const Home = (
    {
        data,
        setData,
        setShowJobs,
        city,
        setCity,
        country,
        setCountry,
        job,
        setJob,
        callApi,
        setPage,
        page
    }) => {
    const navigate = useNavigate()

    const showJobsSelected = (id) => {
        const dataFilter = data.results.filter(job => job.id === id)
        if (dataFilter.length > 0) {
            navigate('/description')
        }
        setShowJobs(dataFilter)
    }

    useEffect(() => {
        callApi()
    }, [page])
    return (
        <>
            <Search setData={setData} callApi={callApi} job={job}
                setJob={setJob} />
            <div className='container__checkbox'>
                <Input
                    className='container__checkbox-input'
                    type='checkbox'
                    name='Check'
                    id='Check' />
                <span>Full Time</span>
            </div>
            <div className='home_flex'>
                <Location
                    city={city}
                    setCity={setCity}
                    country={country}
                    setCountry={setCountry}
                    setData={setData}
                    callApi={callApi}
                />
                {data.results?.length === 0 ? <p>At the moment there are no jobs related to what you are looking for.</p> : ''}
                <section>
                    {data ? data.results.map(job => {
                        return <div className='company' key={job.id} onClick={() => showJobsSelected(job.id)} >
                            <figure className='company__logo'>
                                <img className='company__logo-img' src={Company} alt="Logo Company" />
                            </figure>
                            <div className='company__content'>
                                <p className='company__content-name'>{job.company.display_name || 'Ibermatica'}</p>
                                <h2 className='company__content-title'>{job.title}</h2>
                                <div className='company__content-div'>
                                    <button className='company__content-btn'>{job.contract_time || 'Full time'}</button>
                                    <ul className='company__place'>
                                        <li className='company__place-item'>
                                            <BiWorld className='location__inputBox-icon' />
                                            <span>{job.location.display_name}</span>
                                        </li>
                                        <li className='company__place-item'>
                                            <MdOutlineWatchLater className='location__inputBox-icon' />
                                            <span>{job.created}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }) : ''}
                </section>

            </div>
            <section className='pages'>
                <button
                    className={`pages__btn ${page === 1 ? 'pages__active' : ''}`}
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}                >
                    <MdArrowBackIos />
                </button>
                {Array.from({ length: 6 }).map((_, i) => (
                    <button
                        key={i + 1}
                        className={`pages__btn ${page === i + 1 ? 'pages__active' : ''}`}
                        onClick={() => setPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className={`pages__btn ${page === 10 ? 'pages__active' : ''}`}
                    onClick={() => setPage(page + 1)}
                    disabled={page === 6}
                >
                    <MdOutlineArrowForwardIos />
                </button>
            </section>



            {/* <section className='pages'>
                <button
                    className='pages__btn'
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}>
                    <MdArrowBackIos />
                </button>
                <button className={`pages__btn ${page === 1 ? 'page__active' : ''}`} onClick={() => setPage(1)}>1</button>
                <button className={`pages__btn ${page === 2 ? 'page__active' : ''}`} onClick={() => setPage(2)}>2</button>
                

                {showMore ? <><button className='pages__btn' onClick={() => setPage(4)}>4</button>
                    <button className='pages__btn' onClick={() => setPage(5)}>5</button>

                    <button className='pages__btn' onClick={() => setPage(6)}>6</button>
                    <button className='pages__btn' onClick={() => setPage(7)}> 7</button>
                    <button className='pages__btn' onClick={() => setPage(8)}>8</button>
                    <button className='pages__btn' onClick={() => setPage(9)}>9</button></> : ''}

                <button className='pages__btn' onClick={() => setPage(10)}>10</button>
                <button
                    className='pages__btn'
                    onClick={() => setPage(page + 1)}
                    disabled={page === 10}>
                    <MdOutlineArrowForwardIos />
                </button>
            </section> */}

        </>

    )
}

export default Home