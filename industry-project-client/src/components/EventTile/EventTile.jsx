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
    <section className='card'>
      <div className='card__image'></div>
      <h2 className='card__title'>{eventName}</h2>
      <p>Start Time: {new Date(startDate).toLocaleString()}</p>
      <p>End Time: {new Date(endDate).toLocaleString()}</p>
      <p>Category: {categoryString}</p>
      <p>Accessibility: {accessibilityString}</p>
      {locations && (
        <p>
          Address: {locations.map((location, index) => location.address).join(', ')}
        </p>
      )}
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