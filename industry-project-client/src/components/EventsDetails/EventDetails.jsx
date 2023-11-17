import React from 'react';
import './EventDetails.scss';
import PropTypes from 'prop-types';



const EventDetails = ({ event }) => {
  
  const {
    eventName,
    startDate,
    endDate,
    locations,
    accessibility,
    category,
  } = event.calEvent;

  // Extract relevant properties from the category object
  let categoryString = 'Category Not Available';
  if (category && Array.isArray(category) && category.length > 0) {
    const categoryNames = category.map((cat) => cat.name);
    categoryString = categoryNames.join(', ');
  }
  // Extract relevant properties from the accessibility object
  const accessibilityString = accessibility ? accessibility : 'Accessibility Not Available';
  return (
    <section className='section'>
            <img className='section__img'/>
            <div className='section__descripttion'></div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Date and Time</h3>
                <div className='section__box-inner'>
                    <div className='section__icon-cal section__icon'></div>
                    <div className='section__date'> 
                        <p>Start Time: {new Date(startDate).toLocaleString()}</p>
                        <p>End Time: {new Date(endDate).toLocaleString()}</p>
                    </div>
                </div>
                <div className='section__box-inner'>
                    <div className='section__icon-time section__icon'></div>
                    <div className='section__time'>7:00 PM EST</div>
                </div>
            </div>
            <div className='section__box'>
                <h3 className='section__inner-title'>Location</h3>
                <div className='section__address'>Address: {locations.map((location, index) => location.address).join(', ')}</div>
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
            </div>
            
        </section>
  );
};
EventDetails.propTypes = {
  event: PropTypes.object, // Marking the prop as optional since it's checked for undefined
};
export default EventDetails;

