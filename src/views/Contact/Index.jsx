import React from "react";
// reactstrap components
import { Container, Row, Col} from "reactstrap";
import ContactForm from '../../components/Contact.jsx';

class Contact extends React.Component {
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
            <Container className="shape-container d-flex align-items-right py-md fluid" >
              <Row className="row-grid align-items-right">
              <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-2">
                    <div className="pl-2">
                    <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"3em",
                    fontWeight: "400"
                        }}>  
                         Let<span className="text-success">'</span>s talk<span className="text-success">.</span>
                   </h1>
                   <h3>Boost your sales. Create brand identity. Let’s collaborate to grow your business and keep our community together apart.</h3>
                    </div>                   
                  </div>                 
                </Col>
                <Col className="order-lg-2 ml-lg-auto" lg="6">
                  <div className="position-relative pl-lg-4">
                    
                  <ContactForm />
                      <br />
                      <br />
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

export default Contact;
