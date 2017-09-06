import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App one">

        <div className="couponBanner">
          <h2>SAVE 25% ON ORDERS OVER $150</h2>

          <h2>SHOP NOW!</h2>

          <ul>
            <li>
              <button className="btn">
                <Link to="/CampingNeeds">Camping Needs</Link>
              </button>
            </li>

            <li>
              <button className="btn">
                <Link to="/HikingGear">Hiking Gear</Link>
              </button>
            </li>

            <li>
              <button className="btn">
                <Link to="/FishingTackle">Fishing Tackle</Link>
              </button>
            </li>
          </ul>

        </div>

      </div>

    );
  }
}
