import React, { Component } from 'react'


import { Badge, Container, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends Component {
    render() {
        return (
            <div className="position-relative">
        <section className="section section-lg">
            <Container>
            <Row className="section pb-0 bg-gradient-white">
                <Col className="order-md-2" md="6">
                <h1 
                    className="lead text-dark"
                    color="dark"
                    style={{
                    fontSize:"4em",
                    fontWeight: "900"
                        }}>  
                         Skills<span className="text-info">.</span>
                   </h1>
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">                
                  
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="info"
                            >
                              <FontAwesomeIcon icon={faCoffee} />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted classes
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="info"
                            >
                              <i className="ni ni-chat-round" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Collaborative Learning</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="info"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
            </div>
        )
    }
}
 