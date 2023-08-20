import React from 'react';
import { Carousel } from 'react-bootstrap';
import caro1 from './images/caro-5.jpeg'
import caro2 from './images/caro-2.jpeg'
import caro3 from './images/caro-3.jpeg'
import caro4 from './images/caro-4.jpeg'
import { Link } from 'react-router-dom';


const itemStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};


function Carous() {
  return (
    <Carousel className='caro'>
      <Carousel.Item>
        <img src={caro3} alt="Carousel 1" />
        <Carousel.Caption className='caro-cap'>
          <div className='caro-wel '>
            <h1>Welcome to <span>DivineDestiny Adventures</span> </h1>
            <p>Explore the world's most <span>breathtaking destinations</span>  with us.
              Let your wanderlust guide you to unforgettable experiences and memories that last a lifetime.</p>
            <Link className='btn' to='/destination'>Our Destination's</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img src={caro4} alt="Carousel 1" />
        <Carousel.Caption >
          <div className='caro-inp'>
            <h1>Register to <span> DivineDestiny Adventures</span></h1>
            <p><span>Create an account </span>to start your travel journey!</p>
            <form >
              <input type='email' placeholder=' Email' required />
              <input type="text" id="full-name" placeholder=' Name' required />
              <input type="password" id="password" placeholder=' Password' required></input>
              <button>Register</button>
              <p className='py-2'>Have a great time!</p>
            </form>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={caro1} alt="Carousel 1" />
        <Carousel.Caption className='caro-cap'>
        <div className='caro-wel '>
            <h1>We help you to  <span>Explore  the World</span> </h1>
            <p>Explore the world's most <span>breathtaking destinations</span>  with us.
              Let your wanderlust guide you to unforgettable experiences and memories that last a lifetime.</p>
            <Link className='btn' to='/contactus'>Contact Us</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img src={caro2} alt="Carousel 1" />
        <Carousel.Caption >
          <div className='caro-inp'>
            <h3>Benefits of <span>Travel</span></h3>
            <p>Travel exposes you to different cultures, traditions, languages, and ways of life.
              It broadens your perspective and helps you gain a deeper understanding of the world's diversity.</p>
            <p>Traveling creates lasting memories and experiences that you can cherish for a lifetime.
              The stories and moments you collect become part of your personal history.</p>
            <p>Exposure to different cultures and ways of life encourages open-mindedness,
              tolerance, and empathy towards people with diverse backgrounds.</p>
            <p>Traveling will help you to disconnect the virtual life and the Technology we are all stuck in, when you travel you will feel the sea, the green areas, the colorful streets,
              and the ancient areas you can visit. Traveling will give you positive feelings and a positive mind.</p>
            <p>Experience a new food or try weird traditional food is really an amazing thing to do while traveling.  Every country has its own famous traditional food and the best thing is that you have the chance to try it, it's a wonderful benefit of traveling,
              eating local food from a traditional cuisine from each country you visit is an unforgettable experience! </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default Carous;