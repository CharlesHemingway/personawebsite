import React, { Component } from 'react'


import { Row} from "reactstrap";

// styled components
import styled from 'styled-components'

export default class Image extends Component {
    render() {
        return (
            <>
             <Wrapper>
            <div>
        <section className="hero section-shaped" >  
          <div className="shape shape-dark alpha-3"> 
          <span />
          <span />
          <span />
          </div>
          <Row className="align-items-center justify-content-center">  
            <h1 
                    className="lead"
                    style={{
                    fontSize:"3em",
                    fontWeight: "800",
                    marginTop:"1em",
                    color:"white"
                        }}>  
                         More leads<span className="text-white">,</span> more customers<span className="text-white">,</span> more earnings<span className="text-white">!</span>
                   </h1>
                   {/* <img
                      alt="..."
                      className="img-center img-fluid floating mobimg"
                      style={{height:"20em",}}
                      src={require("../../assets/img/stockimages/greenwebsite.png")
                    }
                    />  */}
              </Row>
          </section>
            </div>
            </Wrapper>
             </>
        )
    }
}

const Wrapper = styled.div`

.hero {
    height:30vh;
    background-color:#2dce89;
},

`;