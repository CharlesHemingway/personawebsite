import React from "react";
// reactstrap components
import { 
  Col,
  Container, 
  Badge,
  Row, 
} from "reactstrap";

class Packages extends React.Component {
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
         <div className="position-relative about">
         <section className="section section-sm section-hero section-shaped" >  
          <div className="shape shape-light alpha-3"
          style={{
            background:"transparent"
          }}>
              <span />
              <span />
              <span />
              <span />
              <span />             
            </div> 
            <Container 
                  className="border-0 "
                  style={{
                    marginTop:"5rem",
                    background:"transparent"}}>
                        <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"3em",
                    fontWeight: "400"
                        }}>  
                        
            <Row className="align-items-center justify-content-center">
            Services<span className="text-success">.</span>
            </Row>
                        
                   </h1>    
                   <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../assets/img/stockimages/greenwebsite.png")}
                  />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pr-md-5">
                    <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"1.4em",
                    fontWeight: "400"
                        }}>Convert Visitors Into Paying Clients</h1>
                    <h6 className="text-dark" style={{
                    fontSize:"1.5em",
                    fontWeight: "200"
                        }}>
                    We make your business grow by helping you to generate leads and potential sales. Our websites and services empower your online presence to accomplish real growth and earnings.
                    </h6>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-tv-2" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Responsive Design
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-tablet-button" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Mobile Friendly</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-money-coins" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              eCommerce
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
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
                  className="fill-info"
                  points="1 2 3 4 5 6"
                />
              </svg>
            </div>
          </section>                
         </div>
        </>
    );
  }
}

export default Packages;
