import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const EventCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from the backend API
    axios.get('/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {events.map((event) => (
        <Card key={event._id}>
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Card.Text>Location: {event.location}</Card.Text>
            <Card.Text>Price: {event.eventPrice}</Card.Text>
            <Card.Text>Rating: {event.eventRating}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EventCard;
