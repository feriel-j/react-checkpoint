import './App.css';
import { Nav,Navbar,Container,Form, Button} from 'react-bootstrap';

function App() {
  return (
    <div >
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
<h1> Welcome to feriel's world</h1>
<h3>Log In </h3>
<Form className="feriel">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="dark fe" type="submit">
    Submit
  </Button>
</Form>
<Navbar expand="lg" variant="dark" bg="dark">
  <Container>
    <Navbar.Brand >Copyright@feriel</Navbar.Brand>
  </Container>
</Navbar>    
    </div>
  );
}

export default App;
