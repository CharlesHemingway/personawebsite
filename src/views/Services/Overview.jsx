import React from "react";
// reactstrap components
import { 
  Card, 
  CardBody, 
  CardTitle,
  Container, 
  Row, 
  CardColumns,
  ListGroup,
  ListGroupItem} from "reactstrap";

class Overview extends React.Component {
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
                    marginTop:"4rem",
                    background:"transparent"}}>
            <Row className="align-items-center justify-content-center">      
              <CardColumns>
                <Card 
                  className="card-lift--hover border-1 shadow"
                  style={{
                    marginTop:"1rem"}}>
              <CardBody className="py-5 align-items-center justify-content-center">        
              <CardTitle>
              <div className="text-success text-uppercase text-center" 
                  style={{
                      fontSize:"4em",
                      fontWeight:'800'
                        }}><i className="ni ni-laptop" /></div>
                  <h2 
                  className="text-success text-uppercase text-center" 
                  style={{
                      fontSize:"1.4em",
                      fontWeight:'800'
                        }}>                      
                      Web Design Development
                  </h2>
              </CardTitle>          
              <ListGroup className="text-dark">
                <ListGroupItem>
                Your website is the first thing potential clients see when searching for your products or services online. 
                Investing on good design and functionality helps convert visitors into paying clients.
                All of our websites are built so that they perform seamlessly regardless of
                 a users’ device. 
                 </ListGroupItem>
              </ListGroup>              
             </CardBody>
             </Card>  
             <Card 
                  className="card-lift--hover border-1 shadow"
                  style={{
                    marginTop:"1rem"}}>
              <CardBody className="py-5 align-items-center justify-content-center">        
              <CardTitle>
              <div className="text-success text-uppercase text-center" 
                  style={{
                      fontSize:"4em",
                      fontWeight:'800'
                        }}><i className="ni ni-chart-pie-35 " /></div>
                  <h2 
                  className="text-success text-uppercase text-center" 
                  style={{
                      fontSize:"1.4em",
                      fontWeight:'800'
                        }}>                       
                     search engine optimization (SEO)
                  </h2>
              </CardTitle>          
              <ListGroup className="text-dark border-0">
                <ListGroupItem>
                Ranking on the top of searches let's the world know you are open for business.
                SEO ensures your website has all of the necessary criteria to rank high in search results.
                We do everything from keyword research, link building and content creation on the terms that matter to your business.    
                 </ListGroupItem>
              </ListGroup>              
             </CardBody>
             </Card>   
             <Card 
                  className="card-lift--hover border-1 shadow"
                  style={{
                    marginTop:"1rem"}}>
              <CardBody className="py-5 align-items-center justify-content-center">        
              <CardTitle>
              <div className="text-success text-uppercase text-center" 
                  style={{
                      fontSize:"4em",
                      fontWeight:'800'
                        }}><i className="ni ni-single-02 " /><i className="ni ni-single-02 " /></div>
                  <h2 
                  className="text-success text-uppercase text-center" 
                  style={{
                      fontSize:"1.4em",
                      fontWeight:'800'
                        }}>                       
                     Social Media Marketing
                  </h2>
              </CardTitle>          
              <ListGroup className="text-dark">
                <ListGroupItem>
                We help you develop a social media strategy that both engages
                your followers and converts them into loyal paying clients.
                We provide you with in-depth reports on the performance of
                your social media marketing efforts which helps us utilize the 
                latest trends and best practices.
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

export default Overview;
