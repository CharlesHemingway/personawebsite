import React from "react";

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
                      src={require("../../assets/img/brand/ossiel.png")
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
                                    As a designer and developer, I understand the perfect website is an investment that should create a memorable first experience and pay for itself. I transform your website from a boring static page into a functional and slick online storefront. In short, I transform websites into self-paying investments.
                                   </h6>
                        <Col className="text-lg-center btn-wrapper" lg="8">
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