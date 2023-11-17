import React from 'react';
import PropTypes from 'prop-types';
import './EventTile.scss';

const EventTile = ({ event }) => {
  // Check if event is not defined
  if (!event) {
    return (
      <section className='card'>
        <div className='card__image'></div>
        <h2 className='card__title'>Event Not Available</h2>
      </section>
    );
  }

  // Check if event.calEvent is not defined
  if (!event.calEvent) {
    return (
      <section className='card'>
        <div className='card__image'></div>
        <h2 className='card__title'>Event Details Not Available</h2>
      </section>
    );
  }


  return (
    <section className='card'>
      <div className='card__image'></div>
      <h2 className='card__title'>{event.calEvent.eventName}</h2>
      <h2>{event.calEvent.endDateTime}</h2>
    </section>
  );
};

EventTile.propTypes = {
  event: PropTypes.object, // Marking the prop as optional since it's checked for undefined
};

export default EventTile;



// return (
//     <section className='card'>
//       {/* You can customize the content based on your event data */}
//       <div className='card__image'></div>
//       <h2 className='card__title'>{eventName}</h2>
//       <div className='card__upper-details-box'>
//         <div className='card__inner-box'>
//           <div className='card__date'>
//             <div className='card__date-title'>Date</div>
//             <p className='card__date-icon'>{startDate}</p>
//           </div>
//           {location && (
//             <div className='card__location'>
//               <div className='card__location-title'>Location</div>
//               <p className='card__location-icon'>{location.locationName}</p>
//             </div>
//           )}
//         </div>
//         <div className='card__inner-box'>
//           <div className='card__cost'>{otherCostInfo}</div>
//           <div className='card__season'>{season}</div>
//         </div>
//       </div>
//       <div className='card__lower-details-box'>
//         <div className='card__icon-box'>
//           {/* Adjust these based on your features data */}
//           <div className={`card__icon-parking ${features.Parking ? 'active' : ''}`}></div>
//           <div className={`card__icon-food ${features['Onsite Food and Beverages'] ? 'active' : ''}`}></div>
//           <div className={`card__icon-access ${features.Accessibility === 'full' ? 'active' : ''}`}></div>
//         </div>
//       </div>
//     </section>
//   );