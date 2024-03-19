import React from 'react';
import '../../assets/css/Portfolio.css';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/wed3.jpg';
import image3 from '../../assets/images/wed5.jpg';

const Portfolio = () => {
  // Dummy data for events
  const events = [
    { id: 1, name: "Cornelia & Charles", type: "Wedding", image: image2 },
    { id: 2, name: "Barbara & Dylan", type: "Party", image: image3 },
    { id: 3, name: "Event 3", type: "Conference", image: image1 },
    { id: 1, name: "Event 4", type: "Wedding", image: image1 },
    { id: 2, name: "Event 5", type: "Party", image: image1 },
    { id: 3, name: "Event 6", type: "Conference", image: image1 },
    { id: 1, name: "Event 7", type: "Wedding", image: image1 },
    { id: 2, name: "Event 8", type: "Party", image: image1 },
    { id: 3, name: "Event 9", type: "Conference", image: image1 },
    { id: 1, name: "Event 10", type: "Wedding", image: image1 },
    { id: 2, name: "Event 11", type: "Party", image: image1 },
    { id: 3, name: "Event 12", type: "Conference", image: image1 },
    // Add more events as needed
  ];

  return (
    <div className="portfolio-container">
      <h1>PORTFOLIO</h1>
      <div className="card-container">
        {events.map(event => (
          <div key={event.id} className="card">
            <img src={event.image} alt={event.name} />
            <div className="overlay">
              <div className="event-details">
                <h3>{event.name}</h3>
                <p>{event.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
