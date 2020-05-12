import React from 'react'

//views
import Contact from "../../views/Contact/Index.jsx";
import Image from "../../views/Portfolio/Image.jsx";

// core components
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx"; 

// scroll
import ScrollUpButton from "react-scroll-up-button";

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
            <Contact />
            <Image />
            </main>
            <Footer />
            <ScrollUpButton />
          </>
    );
  }
}

export default Landing;
