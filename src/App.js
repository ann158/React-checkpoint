import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import image1 from './images/bryan-brittos-OsCblq1fvxw-unsplash.jpg'; // Adjust the path as necessary
import image2 from './images/rosario-janza-LHI32I1iodw-unsplash.jpg'; // Adjust the path as necessary
import image3 from './images/jefferson-sees-6XvOiock234-unsplash.jpg'; // Adjust the path as necessary

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center mt-4">Welcome to My React Checkpoint</h1>

        {/* Cards */}
        <Container className="mt-4">
          <Row>
            <Col sm={4}>
              <Card>
                <img src={image1} alt="Card 1" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    This is a simple card description.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <img src={image2} alt="Card 2" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    This is a simple card description.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <img src={image3} alt="Card 3" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    This is a simple card description.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
