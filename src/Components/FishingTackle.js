import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class FishingTackle extends Component {
  constructor(props){
    super(props)
  }

    render() {
    return (
      <div className="App one">
          <h1>Fishing Tackle</h1>
          <section id="products">

            <div className="product1">
              <div id="productInfo">
                <h3 class="productname">Fishing Pole</h3>
                <h3 class="season">SPRING/SUMMER 2017</h3>
                <h3 class="product-price">$120.00</h3>
              </div>
            </div>

            <div className="product2">
              <div id="productInfo">
                <h3 class="productname">Fishing Vest</h3>
                <h3 class="season">SPRING/SUMMER 2017</h3>
                <h3 class="product-price">$50.00</h3>
              </div>
            </div>

            <div className="product3">
              <div id="productInfo">
                <h3 class="productname">Waders</h3>
                <h3 class="season">SPRING/SUMMER 2017</h3>
                <h3 class="product-price">$220.00</h3>
              </div>
            </div>
          </section>
      </div>
    );
  }
}
