import React, { useState } from 'react';
import '../../assets/css/Booking.css' // Import CSS file for styling
import img from "../../assets/images/bg9.jpg";
const BookingPage = () => {
  // State to manage the booking details
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventPlace: '',
    numberOfGuests: '',
    specialRequirements: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log("Booking submitted:", bookingDetails);
  };

  return (
    <div className="booking-container">
      <h1>EVENT BOOKING</h1>
      <div className='above'>
         <img src={img}></img>
      </div>
      <div className="booking-form">
        <h4>Enter the Details</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={bookingDetails.name}
            onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={bookingDetails.email}
            onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={bookingDetails.phone}
            onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
            required
          />
          <select
            value={bookingDetails.eventType}
            onChange={(e) => setBookingDetails({ ...bookingDetails, eventType: e.target.value })}
            required
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Social">Social Event</option>
            <option value="Corporate">Corporate Event</option>
            {/* Add more event types as needed */}
          </select>
          <input
            type="date"
            value={bookingDetails.eventDate}
            onChange={(e) => setBookingDetails({ ...bookingDetails, eventDate: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Event Place"
            value={bookingDetails.eventPlace}
            onChange={(e) => setBookingDetails({ ...bookingDetails, eventPlace: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Number of Guests"
            value={bookingDetails.numberOfGuests}
            onChange={(e) => setBookingDetails({ ...bookingDetails, numberOfGuests: e.target.value })}
            required
          />
          <textarea
            placeholder="Special Requirements"
            value={bookingDetails.specialRequirements}
            onChange={(e) => setBookingDetails({ ...bookingDetails, specialRequirements: e.target.value })}
          />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
