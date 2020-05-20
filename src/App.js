import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Landing from "./pages/Landing/Landing.jsx";
import About from "./pages/About/About.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Privacy from "./pages/Legal/Privacy.jsx";

function App() {
  useEffect(() => {
      ReactGA.initialize('UA-98616028-2');
    //  To Report Page View 
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    useEffect(() => {
     console.log(window.location.pathname)
    })
  return (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <Landing {...props} />}
      />
      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/privacy-policy"
        exact
        render={props => <Privacy {...props} />}
      />
      <Route
        path="/portfolio"
        exact
        render={props => <Portfolio {...props} />}
      /> 
      <Route
        path="/services"
        exact
        render={props => <Services {...props} />}
      />
      <Route
        path="/contact"
        exact
        render={props => <Contact {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
  );
}

export default App;



