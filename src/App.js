import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import CarouselSec from './Components/Carousel';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />        
        <Switch>
          <Route exact path='/CatsLandingRoute'>
            <Home />
            <CarouselSec />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
