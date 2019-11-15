import React, { Component } from 'react';
// import GraphType from '../Components/GraphType'

class TypesOfGraphs extends Component {

  render() {
    return (
      <div className = "graphType" >
          <button className = "Line" onClick = {this.props.linekhandler}>Line <i class="fas fa-chart-line" onClick = {this.props.linekhandler} ></i></button>
          <button className = "Bar" onClick = {this.props.barhandler}>Bar <i class="far fa-chart-bar" onClick = {this.props.barhandler} ></i></button>
          <button className = "Pie" onClick = {this.props.piehandler}>Pie <i class="fas fa-chart-pie" onClick = {this.props.piehandler} ></i></button>
          <button className = "Radar" onClick = {this.props.radarhandler}>Radar <i class="fab fa-connectdevelop" onClick = {this.props.radarhandler} ></i></button>
          <button className = "Doughnut" onClick = {this.props.doughnuthandler}>Doughnut <i class="fas fa-dot-circle" onClick = {this.props.doughnuthandler} ></i></button>
          <button className = "Polar" onClick = {this.props.polarkhandler}>Polar <i class="fab fa-codiepie" onClick = {this.props.polarkhandler} ></i></button>
      </div>
    );
  }

}

export default TypesOfGraphs;
