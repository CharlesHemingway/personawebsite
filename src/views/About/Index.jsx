import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";


class About extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="dark alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white" 
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section bg-white">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="/" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle bg-white"
                            src={require("../../assets/img/brand/logo.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                           className="btn-success btn-icon-only btn-round ml-1"
                           color="success"
                           href="https://github.com/ossielromero"
                           size="lg"
                           target="_blank"
                        >
                          <i className=" fa fa-github" />
                        </Button>
                        <Button
                          className="btn-success btn-icon-only btn-round ml-1"
                          color="success"
                          href="https://www.facebook.com/ossieldesigns"
                          size="lg"
                          target="_blank"
                        >
                          <i className=" fa fa-facebook" />
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center text-dark">
                        <div>
                          <span className="heading">9,001</span>
                          <span className="description">Coffees</span>
                        </div>
                        <div>
                          <span className="heading">8 years</span>
                          <span className="description">Experience</span>
                        </div>
                        <div>
                          <span className="heading">500+</span>
                          <span className="description">Websites</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center text-dark mt-5">
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Vancouver, BC
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Proudly Coding Since 2013
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top border-bottom text-center text-dark">
                    <Row className="justify-content-center">
                      <Col lg="9">
                      <h6 className="lead text-dark" 
                      style={{
                       fontSize:"1.5em",
                       fontWeight: "400"
                        }}>
                          At Ossiel Designs we build up businesses
                          online and transform static websites into self-paying investments. 
                            </h6>
                      <h6 className="text-dark text-left" 
                      style={{
                       fontSize:"1.5em",
                       fontWeight: "200"
                        }}>
                          With the ongoing COVID19 outbreak and the loss of significant business
                          traffic there is growing uncertainty for many business owners worldwide.                       
                          We aim to help by playing our role in assisting local and international
                          business owners launch successful online brand identities and increase
                          their client traffic and earning potential.
                          </h6>

                          <img
                    alt="..."
                    className="img-fluid floating"
                    style={{
                      height:"30em",
                    }}
                    src={require("../../assets/img/stockimages/greenwebsite.png")}
                  />
                      <h6 className="text-dark text-left" 
                      style={{
                       fontSize:"1.5em",
                       fontWeight: "200"
                        }}>
                          By building eye catching and easy to use eCommerce or SPA websites and effective digital marketing strategies
                          we help you create a memorable first impression, showcase your products and/or services,
                          and ease the financial strain from the loss of regular client traffic. 
                          We look forward to collaborating with you to establish your online
                          identity and keep our business communities financially afloat and 
                          bounce back together.
                        </h6>
                        {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default About;
