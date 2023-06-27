import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillTelephoneFill } from 'react-icons/Bs';
import { GrMail } from 'react-icons/gr';

const Cabecalho = () => {
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
            <Nav className="me-auto">
              <NavDropdown title="Clientes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/clientes">Clientes cadastrados</NavDropdown.Item>
                <NavDropdown.Item href="/clientes/cadastrar">Cadastrar novo cliente</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Funcionários" id="basic-nav-dropdown">
                <NavDropdown.Item href="/funcionarios">Funcionários cadastrados</NavDropdown.Item>
                <NavDropdown.Item href="/funcionarios/cadastrar">Cadastrar novo funcionário</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Carros" id="basic-nav-dropdown">
                <NavDropdown.Item href="/carros">Carros cadastrados</NavDropdown.Item>
                <NavDropdown.Item href="/carros/cadastrar">Cadastrar novo carro</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Locadoras" id="basic-nav-dropdown">
                <NavDropdown.Item href="/locadoras">Locadoras cadastradas</NavDropdown.Item>
                <NavDropdown.Item href="/locadoras/cadastrar">Cadastrar novo funcionário</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Locações" id="basic-nav-dropdown">
                <NavDropdown.Item href="/locacoes">Locações cadastradas</NavDropdown.Item>
                <NavDropdown.Item href="/locacoes/cadastrar">Cadastrar novo funcionário</NavDropdown.Item>
              </NavDropdown>
                  
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/sobre">Sobre-nós</Nav.Link>
              <NavDropdown className='me-3' title="Contato" id="basic-nav-dropdown" align="center">
                <NavDropdown.Item href="">Central de Reservas 24h <br /><BsFillTelephoneFill className='me-1' />0800 123 4567</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href=""> Dúvidas ou sugestões: <br /><GrMail className='me-1' />Fale conosco</NavDropdown.Item>
              </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho