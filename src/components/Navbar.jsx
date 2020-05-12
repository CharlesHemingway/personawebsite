
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Modal,
  Card
} from "reactstrap";

import Contact from "./Contact.jsx"

class NavBar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}
            //  style={{
            //          fontSize:"1.5em",
            //          fontWeight: "400",
            //        color:"black",
            //                   }}
            >
            
                 {/* Ossiel Designs */}

              </NavbarBrand>
              <Button 
              className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" 
                 />
              </Button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        Ossiel Romero
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto text-dark" navbar>
                <NavItem>
                  <Link to="/about" >
                     <NavLink className="text-dark">
                     About <span className="sr-only">(current)</span>
                        </NavLink>
                   </Link> 
                   </NavItem>
                   <NavItem  >
                  <Link to="/portfolio" >
                    <NavLink className="text-dark">
                    Portfolio <span className="sr-only">(current)</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem >
                  <Link to="/services">
                    <NavLink className="text-dark">
                    Services <span className="sr-only">(current)</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">
                    <NavLink className="text-dark">
                    Contact <span className="sr-only">(current)</span>
                    </NavLink>
                  </Link>
                </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                   <Button
                      className="btn-success btn-icon"
                      color="success"                    
                      type="button"
                      onClick={() => this.toggleModal("formModal")}
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-check-bold mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1"
                      style={{
                        fontWeight:"900",
                        fontSize:"1em"
                    }}>
                        Free Quote
                      </span>
                    </Button>
                    <Modal
                        className="modal-dialog-centered"
                        size="md"
                        isOpen={this.state.formModal}
                        toggle={() => this.toggleModal("formModal")}
                      >
                          <div className="modal-body p-0">
                          <Card className="bg-secondary shadow border-0">
                          <Contact />
                          </Card>
                          </div>
                      </Modal>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavBar;
