import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

export default class HikingGear extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App one">
        <h1>Hiking Gear</h1>
        <section id="products">

          <div className="product4">
            <div id="productInfo">
              <h3 class="productname">Waterbottle</h3>
              <h3 class="season">SPRING/SUMMER 2017</h3>
              <h3 class="product-price">$30.00</h3>
            </div>
          </div>

          <div className="product5">
            <div id="productInfo">
              <h3 class="productname">Hiking Boot</h3>
              <h3 class="season">SPRING/SUMMER 2017</h3>
              <h3 class="product-price">$120.00</h3>
            </div>
          </div>

          <div className="product6">
            <div id="productInfo">
              <h3 class="productname">Hiking Pole</h3>
              <h3 class="season">SPRING/SUMMER 2017</h3>
              <h3 class="product-price">$300.00</h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
