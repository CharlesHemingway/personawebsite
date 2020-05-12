import React, { Component } from 'react'


// import { Container, Row, Col} from "reactstrap";

// styled components
import styled from 'styled-components'

export default class Image extends Component {
    render() {
        return (
            <>
            <Wrapper>
             <div>
              <section className="hero section-shaped" >  
                  <div className="shape alpha-3" >
              <span />
              <span />         
             </div>          
             </section>
            </div>
            </Wrapper>
             </>
        )
    }
}

const Wrapper = styled.div`

.hero {
    height:40vh;
    background-image: url("https://images.unsplash.com/photo-1530912780732-0d2507ded3e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
},

`;