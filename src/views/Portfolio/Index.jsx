import React from "react";

// reactstrap components
import { Container, Row, Col, Card} from "reactstrap";

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
      <main className="profile-page" ref="main">
      <section className="section-profile-cover section-shaped my-0">
        {/* Circles background */}
        <div className="default alpha-4">
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
            <div className="px-2">
              <div className="mt-2 py-2 text-left text-center">
                <Row className="justify-content-center">
                  <Col lg="9">
                   <Classes />
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </main>
    );
  }
}

export default Portfolio;
