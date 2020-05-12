import React from "react";
// reactstrap components
import { 
  Button, 
  Card, 
  CardBody, 
  CardTitle,
  CardSubtitle, 
  Container, 
  Row, 
  CardColumns,
  ListGroup,
  ListGroupItem} from "reactstrap";

class Seopackages extends React.Component {
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
                  className="border-0"
                  style={{
                    marginTop:"0em",
                    background:"transparent"}}>
            <Row className="align-items-center justify-content-center">  
            <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"3em",
                    fontWeight: "400"
                        }}>  
                         Web Design <span className="text-success">&</span> Development
                   </h1>     
              <CardColumns>
                <Card 
                  className="card-lift--hover border-0"
                  style={{
                    marginTop:"0rem"}}>
              <CardBody className="py-5 align-items-center justify-content-center">        
              <CardTitle>
                  <h2 
                  className="text-success text-uppercase text-center" 
                  style={{
                      fontWeight:'800'
                        }}>
                      Base Plan
                  </h2>
              </CardTitle>
              <CardSubtitle className="text-center ">
                  <h4 className="lead mt-3 text-dark"
                  style={{
                    fontWeight:'600'
                  }}>                 
                  $1,300.00 *                    
                  </h4>
              </CardSubtitle>
              <ListGroup className="text-dark">
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />7 Page Website</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Image Sliders</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Social Media Integration </ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Google Maps</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Contact Form</ListGroupItem>   
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />2 rounds of rivisions</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />*Plus $50 Per rivision</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />*Plus $200 Per Website Page</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />All Final File Formats</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />100% Ownership Rights</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />100% Satisfaction Guarantee</ListGroupItem>
                <ListGroupItem>
                <Button color="success" size="lg" block>Order Now</Button>
              </ListGroupItem>
              </ListGroup>              
             </CardBody>
             </Card>   



                 {/* second card */}


                 <Card 
                  className="card-lift--hover border-0"
                  style={{
                    marginTop:"0rem"}}>
              <CardBody className="py-5 align-items-center justify-content-center">        
              <CardTitle>
                  <h2 
                  className="text-success text-uppercase text-center" 
                  style={{
                      fontWeight:'800'
                        }}>
                      Premium Plan
                  </h2>
              </CardTitle>
              <CardSubtitle className="text-center ">
                  <h4 className="lead mt-3 text-dark"
                  style={{
                    fontWeight:'600'
                  }}>                 
                  $2,400.00 *                    
                  </h4>
              </CardSubtitle>         
              <ListGroup className="text-dark">
              <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />12 Page Website</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Image Sliders</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Social Media Integration </ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Logo Design</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />On Page SEO</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Google Maps</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Contact Form</ListGroupItem>   
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />3 rounds of rivisions</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />*Plus $50 Per rivision</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />*Plus $200 Per Website Page</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />All Final File Formats</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />100% Ownership Rights</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />100% Satisfaction Guarantee</ListGroupItem>
                <ListGroupItem>
                  <Button color="success" size="lg" block>Order Now</Button>
                </ListGroupItem>
              </ListGroup>              
             </CardBody>
             </Card> 
             {/* Third Card */}

             <Card 
                  className="card-lift--hover border-0"
                  style={{
                    marginTop:"0rem"}}>
              <CardBody className="py-5 align-items-center justify-content-center">        
              <CardTitle>
                  <h2 
                  className="text-success text-uppercase text-center" 
                  style={{
                      fontWeight:'800'
                        }}>
                      Elite Plan
                  </h2>
              </CardTitle>
              <CardSubtitle className="text-center ">
                  <h4 className="lead mt-3 text-dark"
                  style={{
                    fontWeight:'600'
                  }}>                 
                  $3,500.00 *                   
                  </h4>
              </CardSubtitle>
            
              <ListGroup className="text-dark">
              <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />24 Page Website</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Image Sliders</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Social Media Integration </ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Logo Design</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />On Page SEO</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Google Maps</ListGroupItem>               
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Google Search Console</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Google Analytics</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />Contact Form</ListGroupItem>   
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />3 rounds of rivisions</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />*Plus $50 Per rivision</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />*Plus $200 Per Website Page</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />All Final File Formats</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />100% Ownership Rights</ListGroupItem>
                <ListGroupItem><i className="ni ni-check-bold mr-2 text-success" />100% Satisfaction Guarantee</ListGroupItem>
                <ListGroupItem>
                <Button color="success" size="lg" block>Order Now</Button>
              </ListGroupItem>
              </ListGroup>              
             </CardBody>
             </Card> 
             </CardColumns>       
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

export default Seopackages;
