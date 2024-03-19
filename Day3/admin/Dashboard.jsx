import React from 'react';
import '../../assets/css/Dashboard.css'; // Import CSS file for styling

function Dashboard() {
  // Dummy event data
  const events = [
    { id: 1, name: 'Event 1', date: '2024-04-01', location: 'New York', organizer: 'Organizer 1', attendees: 100 },
    { id: 2, name: 'Event 2', date: '2024-04-15', location: 'Los Angeles', organizer: 'Organizer 2', attendees: 150 },
    { id: 4, name: 'Event 3', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 5, name: 'Event 4', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 6, name: 'Event 5', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 7, name: 'Event 6', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 8, name: 'Event 7', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 9, name: 'Event 8', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 10, name: 'Event 9', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    { id: 11, name: 'Event 10', date: '2024-05-01', location: 'Chicago', organizer: 'Organizer 3', attendees: 120 },
    // Add more events as needed
  ];

  return (
    <div className="admin-dashboard">
      <h2>Event Management Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Organizer</th>
            <th>Attendees</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.organizer}</td>
              <td>{event.attendees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
