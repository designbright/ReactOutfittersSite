import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/App.css';
import registerServiceWorker from './registerServiceWorker';
// import styled from 'styled-components';


//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import Data from "./Components/Data.js";
import BaseLayout from './Components/BaseLayout.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import CampingNeeds from './Components/CampingNeeds.js';
import FishingTackle from './Components/FishingTackle.js';
import HikingGear from './Components/HikingGear.js';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact}/>
        <Route path="/CampingNeeds" component={CampingNeeds}/>
        <Route path="/FishingTackle" component={FishingTackle}/>
        <Route path="/HikingGear" component={HikingGear}/>
        <Route exact path="/Home" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
