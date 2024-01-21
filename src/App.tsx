import { useAccount, useBalance } from 'wagmi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import NavbarMenu from './Components/Navbar';
import { Button } from 'react-bootstrap';

function App() {
  const { address, status } = useAccount();
  const result = useBalance({
    address,
    token: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8'
  })
  console.log(address);
  console.log(result)

  return (
    <>
    <NavbarMenu />
    <Container className='bg-dark text-white'>
    <Row>
    {status === 'connected' && (
      <>
        <h2>Account</h2>
        <span>{address}</span>
      </>
    
    )}
      <Col>
      <Card>
      <Card.Body>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Balance {result.data?.value.toString()}{' '}</Form.Label>
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="1000 usdc" />
      </Form.Group>
      <div className="mb-3">
      <Button className='mx-auto' size='lg'>Deposit & Delegate</Button>
      <Button className='btn-block' size='lg'>Deposit & Get GHO in Avalanche</Button>
      </div>
    </Form>
      </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>
    </>

      
  )
}

export default App

