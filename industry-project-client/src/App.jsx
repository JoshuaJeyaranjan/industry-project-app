//HI SONIA
import './App.scss';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/events');
      const result = await response.json();
      setEvents(result.events);
      console.log(result.events)
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
          <strong>{event.eventName}</strong>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
