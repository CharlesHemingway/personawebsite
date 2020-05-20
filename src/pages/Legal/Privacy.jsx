import React from 'react'

//views
import Policy from "../../views/Legal/Privacy.jsx";

// core components
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx"; 

// scroll
import ScrollUpButton from "react-scroll-up-button";

class Privacy extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }render() {
        return (
          <>
            <main ref="main">
            <Navbar />                     
            <Policy />
            </main>
            <Footer />
            <ScrollUpButton />
          </>
    );
  }
}

export default Privacy;
