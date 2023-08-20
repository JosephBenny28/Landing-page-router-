import React from 'react'
import { Container,  Card, Row, Col } from 'react-bootstrap'
import about from './images/aboutus.jpeg'


function AboutUS() {
  return (
    <div>
      <Container className='about'>
        <Row>
          <Col className='about-con'>
          <header>
        <h1>About Us</h1>
        <p>Embark on a Journey of Discovery with Us!</p>
    </header>

    <main>
        <section >
            <h2>Our Mission</h2>
            <p>At Your Travel Explorers, our mission is to ignite your wanderlust and help you create lifelong memories through unforgettable travel experiences. We're committed to curating journeys that blend adventure, culture, and relaxation, all while prioritizing sustainability and responsible tourism.</p>
        </section>

        <section >
            <h2>Our Values</h2>
            <ul>
                <li>Passion for Travel: We are passionate travelers who believe in the transformative power of exploration.</li>
                <li>Customer-Centric Approach: Your satisfaction and comfort are our top priorities.</li>
                <li>Cultural Respect: We respect and celebrate the diversity of cultures in every destination we visit.</li>
                <li>Sustainability: We strive to minimize our environmental footprint and support local communities.</li>
                <li>Quality and Excellence: We're dedicated to delivering excellence in every aspect of your travel experience.</li>
            </ul>
        </section>

        <section >
            <h2>Meet Our Team</h2>
            <p>We are a team of experienced travel enthusiasts who are dedicated to crafting personalized journeys that suit your preferences and interests. Our experts have explored the corners of the globe, ensuring that we provide you with insider knowledge and unique experiences.</p>
        </section>
    </main></Col>
          <Col className='col-img'>
          <img src={about}/></Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default AboutUS