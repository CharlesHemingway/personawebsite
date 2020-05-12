import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Landing from "./pages/Landing/Landing.jsx";
import About from "./pages/About/About.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
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



