import React, { Component } from 'react';
// import GraphType from '../Components/GraphType'

class TypesOfGraphs extends Component {

  render() {
    return (
      <div>
          <button onClick = {this.props.clickhandler}>Line</button>
          <button onClick = {this.props.clickhandler}>Bar</button>
          <button onClick = {this.props.clickhandler}>Pie</button>
          <button onClick = {this.props.clickhandler}>Radar</button>
          <button onClick = {this.props.clickhandler}>Doughnut</button>
          <button onClick = {this.props.clickhandler}>Polar</button>
      </div>
    );
  }

}

export default TypesOfGraphs;
