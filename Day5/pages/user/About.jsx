import React from 'react'
import ing from '../../assets/images/bg6.jpg';
import ing1 from '../../assets/images/bg1.jpg';
import ing2 from '../../assets/images/bg2.jpg';
import '../../assets/css/About.css';
const About = () => {
  return (
    <div className='about'>
        <div className='abt1'>
            <img src={ing}></img>
            <h1>WHO WE ARE</h1>
            <p>Rafanelli Events is a full-service event planning and design company founded in 1996 by Bryan Rafanelli. With a stellar reputation and a focus on creating extraordinary experiences, Rafanelli Events has become a leading name in the industry. With offices in New York City, Palm Beach, and Boston, Rafanelli Events has a global reach and designs and produces events worldwide. </p>
            <p>Our expertise includes destination and private events, corporate gatherings and non-profit fundraisers ranging in size from 15 to 15,000 attendees.  Rafanelli Events’ dedicated team of fifty design and production professionals act on the philosophy that they are in the  experience  business, and that every event is a unique creative challenge deserving of a one-of-a-kind celebration. </p>
             <p>What sets Rafanelli Events apart is our unwavering commitment to detail, innovation, and personalized touches. We curate unforgettable events that encapsulate the unique preferences and personalities of their clients, leaving a lasting impression on all who attend. </p>
            <p>Rafanelli Events’ clients include Fortune 500 families, public figures, and successful entrepreneurs as well as some of the most prominent institutions and brands in the world.  </p>
            <p>With a passion for creating memorable moments and a legacy of excellence, we continue to redefine the boundaries of event planning, setting the stage for unparalleled celebrations worldwide. </p>
        </div>
        <div className='abt2'>
        <img src={ing1}></img>
        <img src={ing2}></img>
        </div>
    </div>
  )
}

export default About