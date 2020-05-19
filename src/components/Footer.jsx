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
                {/* <Button
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
                            </UncontrolledTooltip> */}
                            <Button
                              className="btn-success btn-icon-only btn-round ml-1"
                              color="success"
                              href="https://github.com/ossielromero"
                              id="tooltip383967597"
                              size="lg"
                              target="_blank"
                            >
                              <i className=" fa fa-github" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip383967597">
                              Follow us on Github!
                            </UncontrolledTooltip>
                            <Button
                              className="btn-success btn-icon-only btn-round ml-1"
                              color="success"
                              href="https://www.instagram.com/ossieldesigns/"
                              id="tooltip568564536"
                              size="lg"
                              target="_blank"
                            >
                              <i className=" fa fa-instagram" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip568564536">
                              Follow us on Insta!
                            </UncontrolledTooltip>
                            <Button
                              className="btn-success btn-icon-only btn-round ml-1"
                              color="success"
                              href="https://www.facebook.com/ossieldesigns"
                              id="tooltip56856453234"
                              size="lg"
                              target="_blank"
                            >
                              <i className=" fa fa-facebook" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip56856453234">
                              Like us on Facebook!
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
