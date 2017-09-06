import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class About extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App one">
          <h1>About Us</h1>

          <h3> Welcome to the Outside.
_
Where there are no strangers,
only friends you haven’t met yet.

You don’t need a passport to come here,
an invitation to play here
or a membership to belong here.

Just step outside your front door,
and you’ve arrived.

So wherever you are, join us.
Because on the inside,
we’re all outsiders.
And if it’s outside,
we’re all in.
_
</h3>
      </div>
    );
  }
}
