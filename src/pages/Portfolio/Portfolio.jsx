import React from 'react'

// views
import Portfolio from "../../views/Portfolio/Index.jsx";
import Image from "../../views/Portfolio/Image.jsx";
import Contact from "../../views/Contact/Index.jsx";
// core components
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

// scroll 
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class Landing extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }render() {
        return (
            <>
            
            <main ref="main">
            <Navbar />          
            
            <Portfolio />
            <Contact />
            <Image />
            <ScrollUpButton /> 
            </main>
            <Footer />
      </>
    );
  }
}

export default Landing;
