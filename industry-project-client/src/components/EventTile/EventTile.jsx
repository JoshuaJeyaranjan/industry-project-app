import React from 'react';
import PropTypes from 'prop-types';
import './EventTile.scss';


// Placeholder image URL
const placeholderImage = 'https://via.placeholder.com/150';

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
    shortDescription,
    image,
    freeEvent,
    reservationsRequired,
    eventWebsite,
    features,
    orgPhone,
    orgEmail,
  } = event.calEvent;

  // Extract relevant properties from the category object
  let categoryString = 'Category Not Available';

  if (category && Array.isArray(category) && category.length > 0) {
    const categoryNames = category.map((cat) => cat.name);
    categoryString = categoryNames.join(', ');
  }


  // Extract relevant properties from the accessibility object
  const accessibilityString = accessibility ? accessibility : 'Accessibility Not Available';
  const baseUrl = 'http://localhost:3001'; // Replace with your actual base URL

  return (
    <section className='card'>
      <div className='card__image'>
        <img
          src={`${baseUrl}${image.url || placeholderImage}`}
          alt={eventName}
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
      </div>
      <h2 className='card__title'>{eventName}</h2>
      <p>Start Time: {new Date(startDate).toLocaleString()}</p>
      <p>End Time: {new Date(endDate).toLocaleString()}</p>
      <p>Category: {categoryString}</p>
      <p>Accessibility: {accessibilityString}</p>
      <p>Short Description: {shortDescription}</p>
      <p>Free? {freeEvent}</p>
      <p>Reservations? {reservationsRequired}</p>
      <a href={eventWebsite} target="_blank" rel="noopener noreferrer">
        Event Site
      </a>
      <p>org phone {orgPhone}</p>
      <p>org email {orgEmail}</p>

      {locations && (
        <div>
          <p>Locations:</p>
          {locations.map((location, index) => (
            <div key={index}>
              <p>{location.locationName}</p>
              <p>{location.address}</p>
            </div>
          ))}
        </div>
      )}

      {features && (
        <div>
          <p>Features:</p>
          {Object.entries(features).map(([feature, value], index) => (
            <p key={index}>
              {feature}: {value.toString()}
            </p>
          ))}
        </div>
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
