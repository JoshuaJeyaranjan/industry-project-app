import React, { useState, useEffect } from 'react';

const EventListPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/events');
      const result = await response.json();
      setEvents(result.events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListPage;
