import React, { useState, useEffect } from 'react';
import EventDetails from '../../components/EventDetails/EventDetails'; // Import the EventTile component

const EventDetailsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/events');
      console.log('Raw Response:', response); // Log the raw response
      const result = await response.json();
      console.log(result);
  
      // Log the entire result for better inspection
      console.log('Full Result:', result);
  
      // Ensure the 'events' property exists and is an array
      const fetchedEvents = Array.isArray(result) ? result : [];

      setEvents(fetchedEvents);

      
  
      // Set the events in state
      
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  
  return (
    <div>
      <h1>Event List</h1>
      {events.map((event, index) => (
        <EventDetails key={index} event={event} />
))}

    </div>
  );
};

export default EventDetailsPage;
