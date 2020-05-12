/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                  <Row className="justify-content-md-between">
                <div className="copyright text-center">
                  © {new Date().getFullYear()}{" "}                
                    Ossiel Designs.
                </div> 
                <div className="copyright text-center">
                 Help
                </div>
                <div className="copyright text-center">
                  Privacy
                </div>
                <div className="copyright text-center">
                  Terms
                </div>
                </Row>             
              </Col>
              
              <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                  className=" btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://twitter.com/ossielromero91"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow me
                </UncontrolledTooltip>
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/ossielromero"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Follow me
                </UncontrolledTooltip>
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="instagram"
                  href="https://www.instagram.com/ossieltr/"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow me
                </UncontrolledTooltip>
                <Button
                  className="btn-default btn-icon-only btn-round ml-1"
                  color="default"
                  href="https://www.linkedin.com/in/ossiel/"
                  id="tooltip56856453232"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip56856453232">
                  Follow me
                </UncontrolledTooltip>
              
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
