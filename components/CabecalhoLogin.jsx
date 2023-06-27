import React, { useState } from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillTelephoneFill } from 'react-icons/Bs';
import { GrMail } from 'react-icons/gr';

const CabecalhoLogin = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/brand2.png"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/sobre">Sobre-nós</Nav.Link>
              <NavDropdown className='me-3' title="Contato" id="basic-nav-dropdown" align="center">
                <NavDropdown.Item href="">Central de Reservas 24h <br /><BsFillTelephoneFill className='me-1' />0800 123 4567</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href=""> Dúvidas ou sugestões: <br /><GrMail className='me-1' />Fale conosco</NavDropdown.Item>
              </NavDropdown>

                <Button href='/user'
                  className="ml-auto"
                  style={{
                    backgroundColor: isHovered ? '#3CB371' : '#228B22',
                    border: 'none',
                    transition: 'background-color 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Login/Cadastrar
                </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CabecalhoLogin;
