import React from 'react'

// views
import About from "../../views/About/Index.jsx";
import Image from "../../views/About/Image.jsx";
import Contact from "../../views/Contact/Index.jsx";

// core components
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx"; 

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
            <About />
            <Contact />
            <Image />
            </main>
            <Footer />
      </>
    );
  }
}

export default Landing;
