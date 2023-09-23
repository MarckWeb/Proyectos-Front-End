import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Description.scss'


import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import Company from '/img/job.jpg'

const Description = ({ showJobs }) => {
    const navigate = useNavigate()

    const goBackToHome = () => {
        navigate('/')
    }

    return (
        <div className='description'>
            <section>
                <div className='description__toBack' onClick={goBackToHome}>
                    <HiOutlineArrowNarrowLeft />
                    <span>Back to search</span>
                </div>
                <h3 className='description__title'>HOw to Apply</h3>
                <p className='description__email'>Please email a copy of your resume and online portfolio to <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span></p>
            </section>
            {showJobs ? <section>

                <h2 className='description__job'>{showJobs[0].title}</h2>
                <span className='description__type'>Full Time</span>
                <div className='description__public'>
                    <MdOutlineWatchLater className='location__inputBox-icon' />
                    <p>{showJobs[0].created}</p>
                </div>
                <div className='description__sitelogo'>
                    <figure className='description__sitelogo-logo'>
                        <img className='description__sitelogo-logo-img' src={Company} alt="" />
                    </figure>
                    <div className='description__sitelogo-text'>
                        <p className='description__sitelogo-text-company'>{showJobs[0].company.display_name || 'Kasisto'}</p>
                        <div className='description__sitelogo-text-location'>
                            <BiWorld className='location__inputBox-icon' />
                            <p>{showJobs[0].location.display_name}</p>
                        </div>
                    </div>
                </div>
                <p className='description__description'>{showJobs[0].description}</p>
                <a className='description__redirect' href={showJobs[0].redirect_url} target='__blank'>Apply to work </a>
            </section> : 'NOt Found 404'}

        </div>
    )
}

export default Description