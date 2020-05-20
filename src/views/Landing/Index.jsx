import React from "react";
import ReactGA from "react-ga";
// reactstrap components
import { 
  Container,
  Row, 
  Col,
  UncontrolledTooltip,
  Button
} from "reactstrap";

// styled components
import styled from 'styled-components'

class Index extends React.Component {
  
  openGithub = state => {
    ReactGA.event({
      category: 'Social Media',
      action: 'Opened Github'
    });
  };

  openInstagram = state => {
    ReactGA.event({
      category: 'Social Media',
      action: 'Opened Instagram'
    });
  };

  openFacebook = state => {
    ReactGA.event({
      category: 'Social Media',
      action: 'Opened Facebook'
    });
  };
  render() {    
    return (
      <>
      <Wrapper>
        <div className="position-relative">
          <section className="section section-md section-hero section-shaped" >  
          <div className="shape alpha-3"
          style={{
            background:"white"
          }}>
              <span />
              <span />
              <span />
              <span />
              <span />
              
            </div>              
            <Container className="shape-container d-flex align-items-left py-md fluid">
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" lg="6">
                  <div className="position-relative pl-lg-4">
                    <img
                      alt="..."
                      className="img-center img-fluid floating mobimg"
                      src={require("../../assets/img/brand/logo.png")
                    }
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div className="pl-4">
                    <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"3em",
                    fontWeight: "400",
                        }}>  
                          Better design, better experiences.
                          
                           </h1>
                              <div>
                                <span />
                                <span />
                                <span />
                                </div>
                                  <h6 className="text-dark mobh6"
                                  style={{
                                    fontSize:"1.3em",
                                    fontWeight: "200",
                                    paddingBottom: "2em",
                                        }}>
                                    Our specialties are web development and digital marketing, 
                                    but our focus is on your success. We'll transform your website
                                    into a self-paying investment.
                                   </h6>
                        <Col className="text-lg-center btn-wrapper" lg="8">
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
                              onClick={this.openGithub}
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
                              onClick={this.openInstagram}
                            >
                              <i className=" fa fa-instagram" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip568564536">
                              Follow us on Instagram!
                            </UncontrolledTooltip>
                            <Button
                              className="btn-success btn-icon-only btn-round ml-1"
                              color="success"
                              href="https://www.facebook.com/ossieldesigns"
                              id="tooltip56856453234"
                              size="lg"
                              target="_blank"
                              onClick={this.openFacebook}
                            >
                              <i className=" fa fa-facebook" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip56856453234">
                              Like us on Facebook!
                            </UncontrolledTooltip>
                          </Col>
                                </div>                   
                              </div>                 
                            </Col>
                          </Row>
                        </Container>
                        {/* SVG separator */}

                        <div className="separator separator-bottom separator-skew zindex-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 0 0"
                            x="0"
                            y="0"
                          >
                            <polygon
                              className="fill-white"
                              points="0 0 0 0 0 0"
                            />
                          </svg>
                        </div>
                      </section>
          
        </div> 
        </Wrapper>      
      </>
    );
  }
}

export default Index;


const Wrapper = styled.div`


@media only screen and (min-width: 300px) and (max-width: 959px){
 
  .mobimg {
      width: 50%;
      z-index: 100;
      background-color: white;
      border: 0;
      box-shadow: none;
      padding-bottom: 0;
      margin-bottom:0;
  }, 

  .mobh6 {
    font-size: 12px;
    padding-bottom: 0;
} 
   
  }
`;