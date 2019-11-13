import React, { Component } from 'react';
import '../App.css';

class Description extends Component {

  render() {
    return (
      <div className = "description">
        <h3>Description</h3>
        <p>{this.props.champObj.blurb}</p>
      </div>
    );
  }

}

export default Description;
