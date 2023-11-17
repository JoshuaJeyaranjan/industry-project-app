import React from 'react';
import './EventTile.scss';

const EventTile = () => {
    return (
        <section className='card'>
            <div className='card__image'></div>
            <h2 className='card__title'></h2>
            <div className='card__upper-details-box'>
                <div className='card__inner-box'>
                    <div className='card__date'>
                        <div className='card__date-title'></div>
                        <p className='card__date-icon'></p>
                    </div>
                    <div className='card__location'>
                        <div className='card__location-title'></div>
                        <p className='card__location-icon'> </p>
                    </div>
                </div>
                <div className='card__inner-box'>
                    <div className='card__cost'></div>
                    <div className='card__season'></div> // season needs to change!!!!/ maybe month.
                </div>
            </div>
            <div className='card__lower-details-box'>
                <div className='card__icon-box'>
                    <div className='card__icon-parking'></div>
                    <div className='card__icon-food'></div>
                    <div className='card__icon-access'></div>
                </div>
            </div>
            
        </section>
    );
};

export default EventTile;