import './App.css';
import React from 'react';
import Home from './components/Home';
import About from "./components/About";
import Services from "./components/Services";
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="Appi">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;

