import React from 'react';
import './EventDetails.scss';

const EventDetails = () => {
    return (
        <section className='section'>
            <img className='section__img'/>
            <div className='section__descripttion'></div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Date and Time</h3>
                <div></div>
                <div></div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Location</h3>
                <div className='section__address'>Address</div>
                <div className='section__map'>View Map</div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Cost</h3>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Facilities</h3>
                <div className='section__icon-p'></div>
                <div className='section__icon-food'></div>
                <div className='section__icon-access'></div>
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