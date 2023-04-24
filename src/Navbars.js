import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbars extends Component {
  render() {
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    return ( 
<Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Türk Edebiyatının Dönemleri</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://tr.wikipedia.org/wiki/Kategori:T%C3%BCrk_%C5%9Fairler">Şairler</Nav.Link>
            <NavDropdown title="Dönemler" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#dons1">Tanzimat Dönemi </NavDropdown.Item>
              <NavDropdown.Item href="#dons2">Servet-i Fünun Dönemi</NavDropdown.Item>
              <NavDropdown.Item href="#dons3">Fecr-i Âti Dönemi</NavDropdown.Item>
              <NavDropdown.Item href="#dons4">Millî Edebiyat Dönemi</NavDropdown.Item>
              <NavDropdown.Item href="#dons5">Cumhuriyet Dönemi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://sehitlerfenlisesi.meb.k12.tr/">YŞFL</Nav.Link>
            <Nav.Link eventKey={2} href="https://e-okul.meb.gov.tr/">
              E Okul
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
    
  }
}
