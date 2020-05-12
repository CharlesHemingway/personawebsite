import React from "react";
import Spacer from "react-spacer";

// reactstrap components
import { Container, Row, Col} from "reactstrap";


class About extends React.Component {
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
          <div className="shape  alpha-3"
          style={{
            background:"white"
          }}>
              <span />
              <span />
              <span />
              <span />
              <span />
              
            </div> 

           <Container className="shape-container d-flex align-items-right py-md fluid" >
              <Row className="row-grid align-items-right">
              <Col className="order-lg-1" lg="4">
                  <div className="d-flex px-2">
                    <div className="pl-4">
                    <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"3em",
                    fontWeight: "400"
                        }}>  
                         About Me<span className="text-success">.</span>
                   </h1>
                   <Spacer grow='2' />
                    </div>                   
                  </div>                 
                </Col>
                <Col className="order-lg-2 ml-lg-auto" lg="8">
                  <div className="position-relative pl-lg-4">
                    <img
                      alt="..."
                      className="img-center img-fluid floating mobimg"
                      src={require("../../assets/img/brand/ossiel.png")
                    }
                    style={{
                        height:"15em",
                        paddingBottom:"2em",
                    }}
                    />
                    
                  <h6 className="text-dark"
                      style={{
                        fontSize:"1.4em",
                        fontWeight: "200"
                            }}>
                              Hello! I'm Ossiel Romero, I have a decade of experience building up businesses online and transforming boring websites into self-paying investments. With the ongoing COVID19 outbreak and the loss of significant business traffic there is growing uncertainty for many business owners worldwide. I aim to help by playing my role in assisting local and international business owners launch successful online brand identities and increase their client traffic and earning potential. By creating eye catching and easy to use business websites I help you create a memorable first impression, showcase your products and/or services, and ease the financial strain from the loss of regular client traffic. I take my craft seriously and look forward to collaborating with you to establish your online identity and keep our business communities financially afloat and bounce back together
                      <span className="text-success">.</span>

                      </h6>
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

export default About;
