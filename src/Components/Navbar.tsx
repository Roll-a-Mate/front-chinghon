import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const NavbarMenu: React.FC = () => {
  const { isConnected } = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  console.log(connectors)
    return (
       <>
       <Navbar bg="dark" data-bs-theme="dark" className='py-3 mb-3'>
        <Container>
          <Navbar.Brand href="#home">ChinGHOn Protocol</Navbar.Brand>
          <Nav className="justify-coontent-end">
            {!isConnected && (
                connectors.map((connector) => (
                    <Button
                        variant="outline-info"
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                    >
                        Connect {connector.name}
                    </Button>
                ))
            )}
            {isConnected && (
                <>
                {/* {account.address} */}
                <Button variant="outline-info" onClick={() => disconnect()}>
                    Disconnect
                </Button>
                </>
            )}
          
          </Nav>
        </Container>
      </Navbar>
       </>
    );
};

export default NavbarMenu;
