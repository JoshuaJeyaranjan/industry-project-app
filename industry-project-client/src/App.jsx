// HI SONIA
import './App.scss';
import EventDetails from './components/EventsDetails/EventDetails';
// import React, { useState, useEffect } from 'react';

const App = () => {
//   const [eventNames, setEventNames] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:8081/events');
//       const result = await response.json();

//       // Log the entire result for better inspection
//       console.log('Full Result:', result);

//       // Ensure the 'events' property exists and is an array
//       const fetchedEvents = Array.isArray(result) ? result : [];

//       // Extract the first 50 event names
//       const first50EventNames = fetchedEvents
//         .slice(0, 50) // Take the first 50 events
//         .map(event => event.calEvent.eventName); // Adjusted property path

//       setEventNames(first50EventNames);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

  return (
    <div>
      {/* <h1>Event Names (First 50)</h1>
      <ul>
        {eventNames.map((eventName, index) => (
          <li key={index}>{eventName}</li>
        ))}
      </ul> */}
      <EventDetails/>

    </div>
  );
};

export default App;
