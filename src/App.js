import React, { useEffect } from 'react';
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
import { debounce } from './util';
import SecondList from './Components/secondList';


function App() {
  useEffect(() => {
    window.addEventListener('scroll', animateText)
  }, [])

  const animateText = debounce(() => {
    const section = document.getElementById('homeOl');
    const coords = section.getBoundingClientRect();
    const visible = window.innerHeight;
    const sectionTwo = document.getElementById('secHomeOl');
    const coordsTwo = sectionTwo.getBoundingClientRect()

    if(coordsTwo.y < visible || coordsTwo.bottom < visible) {
      sectionTwo.className = 'secHomeOlAnim'
      console.log(coordsTwo, visible)
    }

    else {
      sectionTwo.className = 'secHomeOl'
    }
    
    if(coords.bottom > 0) {
      section.className = 'homeOlAnim'      
    }
    else {
      section.className = 'homeOl'
    }
    
  }, 200)

  return (
    <Router>
      <div className="App">
        <Navbar />        
        <Switch>
          <Route exact path='/CatsLandingRoute'>
            <Home />
            <CarouselSec />
            <SecondList />
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
