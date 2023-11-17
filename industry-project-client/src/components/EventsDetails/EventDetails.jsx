import React from 'react';
import './EventDetails.scss';

const EventDetails = () => {
    return (
        <section className='section'>
            <img className='section__img'/>
            <div className='section__descripttion'></div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Date and Time</h3>
                <div className='section__box-inner'>
                    <div className='section__icon-cal section__icon'></div>
                    <div className='section__date'> November 28, 2023 - April 13, 2024</div>
                </div>
                <div className='section__box-inner'>
                    <div className='section__icon-time section__icon'></div>
                    <div className='section__time'>7:00 PM EST</div>
                </div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Location</h3>
                <div className='section__address'>Address</div>
                <div className='section__map'>View Map</div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Cost</h3>
                <div className=''></div>
                <div className=''></div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Facilities</h3>
                <div className='section__box-icon'>
                    <div className='section__icon-p section__icon'></div>
                    <div className='section__icon-food section__icon'></div>
                    <div className='section__icon-access section__icon'></div>
                </div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>More Information</h3>
                <div className='section__website'><a>Website</a></div>
                <div className='section__email'><a>Email</a></div>
                <div className='section__phone'><a>Phone</a></div>
            </div>
            
        </section>
    );
};

export default EventDetails;