import React, { Component } from 'react'


import { Badge, Container, Row, Col} from "reactstrap";


export default class Promo3 extends Component {
    render() {
        return (
            <div>
         <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pr-md-5">
                    <h1 
                    className="lead"
                    color="default"
                    style={{
                    fontSize:"2em",
                    fontWeight: "900"
                        }}>Membership With Meaning</h1>
                    <h6 style={{
                    fontSize:"1.5em",
                    fontWeight: "200"
                        }}>
                    With so much to learn, real projects to create, and the support of fellow-students, Preparalibre empowers you to accomplish real growth.
                    </h6>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="info"
                            >
                              <i className="ni ni-books" />
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
                            <h6 className="mb-0">Collaborative learning</h6>
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
