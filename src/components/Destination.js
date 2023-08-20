import React from 'react'
import { Container,  Card, Row, Col } from 'react-bootstrap'

const places =
  [
    {
      'id': 1,
      'name': 'Petra in Jordan ',
      'image': 'wonder-1.webp',
      'description': 'Petra is a famous archaeological site in Jordan southwestern desert.Dating to around 300 B.C. '
    },
    {
      'id': 2,
      'name': 'Pyramid ',
      'image': 'wonder-2.jpeg',
      'description': 'The Great Pyramid of Giza is the largest Egyptian pyramid and served as king '
    },
    {
      'id': 3,
      'name': 'Taj Mahal ',
      'image': 'wonder-3.webp',
      'description': 'An immense mausoleum of white marble, built by order of the Mughal emperor Shah Jahan '
    },
    {
      'id': 4,
      'name': 'Scottish standing stones ',
      'image': 'wonder-4.webp',
      'description': 'Discover the mysterious standing stones and stone circles from Scotlands ancient past '
    },
    {
      'id': 5,
      'name': 'The Colosseum in Italy ',
      'image': 'wonder-5.webp',
      'description': 'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. '
    },
    {
      'id': 6,
      'name': 'Statue of Liberty ',
      'image': 'wonder-6.jpeg',
      'description': 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City '
    },
    {
      'id': 7,
      'name': 'Great wall of china ',
      'image': 'wonder-7.webp',
      'description': 'At the edge of the Bohai Gulf is Shanhai Pass, considered the traditional end of the Great Wall and the "First Pass Under Heaven". '
    },
    {
      'id': 8,
      'name': 'Tower of Pisa ',
      'image': 'wonder-8.jpeg',
      'description': 'he Leaning Tower of Pisa, or simply, the Tower of Pisa, is the campanile, or freestanding bell tower, of Pisa Cathedral. '
    }
  ]

function Destination() {
  return (
    <div >
      <Container fluid>
        <Container className='destination'>
          <Row className='des-row'>
            {places.map((place) => (
              <Col key={place.id} sm={6} md={3} className='p-2'>
                <Card key={place.id} style={{ width: '18rem', height:"320px" } }>
                  <Card.Img variant="top" src={require(`./images/${place.image}`)} alt={place.name} className='p-2 des-row-img' />
                  <Card.Body className='text-center'>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>
                      {place.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}



          </Row>
        </Container>
      </Container>
      
    </div>
  )
}

export default Destination
