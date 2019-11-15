import React, { Component } from 'react';
import '../App.css';

class Description extends Component {

  render() {
    return (
      <div className = "description">
        <p>{this.props.champObj.blurb}</p>
      </div>
    );
  }

}

export default Description;
