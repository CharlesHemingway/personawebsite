import React from "react";

// reactstrap components
import { Container, Row, Col} from "reactstrap";

import Classes from './components/Classes.jsx'


class Portfolio extends React.Component {
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
        < >
       
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

            <Container className="d-flex py-sm">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="8">     
                          
                
                  <Classes/>
                    
                  </Col>
                </Row>
              </div>
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

export default Portfolio;
