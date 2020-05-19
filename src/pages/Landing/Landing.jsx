import React from 'react'

import Hero from "../../views/Landing/Index.jsx";
import Image from "../../views/About/Image.jsx";

import Webpackages from "../../views/Services/Webpackages.jsx";
import Overview from "../../views/Services/Overview.jsx";
import Banner from "../../views/Services/Banner.jsx";
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
            <Hero />
            <Banner />
            <Overview />     
            <Webpackages />
            <Image /> 
            <Contact />
            </main>
            <Footer />
            <ScrollUpButton />
            </>
    );
  }
}

export default Landing;
