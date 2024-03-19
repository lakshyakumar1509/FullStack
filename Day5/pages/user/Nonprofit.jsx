import React from 'react'
import ing from '../../assets/images/np.jpg';
import ing1 from '../../assets/images/bg1.jpg';
import ing2 from '../../assets/images/bg2.jpg';
import '../../assets/css/Wedding.css';
const Nonprofit = () => {
  const weddingServices = [
    
   " Arrival Gifts",
"Bridal Salon Selection",
"Bridesmaid Dress Selection",
"Budget Planning",
"Catering Consultation",
"Décor Selection",
"Engagement Parties",
"Entertainment",
"Etiquette Advice",
"Favors",
"Floral",
"Hair and Makeup",
"Hotel Room Blocks",
"Invitations"
  ];
  return (
    <div className='wedding'>
      <h6>SERVICES</h6> 
      <h1>Non-Profit</h1>
    <div className='wed1'>
        <img src={ing}></img>
       
         <h2>IT’S NOT A RAFANELLI WEDDING. IT’S YOUR WEDDING. YOUR STORY.</h2>
         <p>Our passion lies in crafting an experience that becomes uniquely yours, etched into your memory, and shared with your loved ones forever. We have been building our reputation for years, perfecting the art of incomparable weddings. Working with only the best partners, we are collaborative, creative, and cool in those moments that require experience. We know the months and weeks before the wedding – for you – should be as special as the day itself.</p>
         <p>And that day? Well, at some time during the wedding, time will stop. Wonder will light up the faces of everyone. All at once, there’s no line between dreaming and a dream. Between storybook and story. Between magic and magical. The day is everything you ever dreamed of. And more.</p>
        <h2>Services We Provide for Weddings</h2>
    </div>
    <div className="wedding-services">
        <ul>
          {/* Map through the list of wedding services and display each one */}
          {weddingServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        
      </div>
      <div className='uir8'>
        <ul>
          <li>Itineraries</li>
          <li>Lighting & Sound</li>
          <li>Officiants</li>
          <li>On-Site Management</li>
          <li>Photography</li>
          <li>Rehearsal Dinners</li>
          <li>Rentals</li>
          <li>Stationery</li>
          <li>Tenting</li>
          <li>Timelines</li>
          <li>Transportation</li>
          <li>Venue Selection & Management</li>
          <li>Videography</li>
          <li>Wedding Cake</li>
        </ul>
        </div>
    <div className='wed2'>
    <img src={ing1}></img>
    <img src={ing2}></img>
    </div>
</div>
  )
}

export default Nonprofit