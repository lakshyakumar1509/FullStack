import React from 'react'
import image from '../../assets/images/bg11.png';
import '../../assets/css/Home.css';
import img1 from '../../assets/images/wed1.jpg';
const Home = () => {
    const data=undefined;
    console.log(data);
  return (
    <div>
      <div className='cnt1'>        
      </div>
      <div className='cnt2'>    
      <h6>OUR PROMISE</h6> 
      <h2>EVERY EVENT BEGINS WITH A STORY.</h2>  
      <p>We turn dreams into reality. Weave story into every thread of your event. And conjure a wonderfully collaborative magic to create celebrations that are both unmatched and unforgettable.
One secret? We listen. To understand who you are. Who you want to be. And who (and what) matters most to you. We leave no stone unturned, no detail untended to, no possibility unexplored.</p> 
     
     <p>That’s because the most beautiful event is also the smartest event, and we take pains along every step of the way to deliver both. The initial concept conversations and the design work that realize your vision are so intrinsically linked; one literally cannot exist without the other. And when we layer in the flawless execution that has become the very essence of who we are, the results are simply spectacular.
      </p> 
      <p>Our clients are as unique as our events. Individuals, families, Fortune 500 corporations, and non-profit organizations – each looking to create a singular, incomparable experience. For each, we meet and exceed their highest expectations – bringing an artistry to execution renowned around the world.</p>
      <p>We are Rafanelli Events, and the best event we’ve ever done is going to be yours.</p>
      <button>DISCOVER WHO WE ARE</button>
      </div>
      {/* <div className='cnt3'>
      <h6>WHAT WE DO</h6>
        <div className='img31'>
          <img src={img1}></img>
        </div>
        <div className='cont31'>

        </div>
      </div> */}
    </div>
  )
}

export default Home
