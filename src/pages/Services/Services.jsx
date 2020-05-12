import React from 'react'

// views

import Index from "../../views/Services/Index.jsx";
import WebPackages from "../../views/Services/Webpackages.jsx";
import Overview from "../../views/Services/Overview.jsx";
import Banner from "../../views/Services/Banner.jsx";
import Image from "../../views/Services/Image.jsx";

// core components
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx"; 

// scroll
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class Services extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }render() {
        return (
            <>
            
            <main ref="main">
            <Navbar />
            <Index /> 
            <Banner />
            <Overview />
            <Image />          
            <WebPackages />
            <Image />  
            </main>
            <Footer />
            <ScrollUpButton />
      </>
    );
  }
}

export default Services;
