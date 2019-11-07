import React, { Component } from 'react';
import TypesOfGraphs from '../Components/TypesOfGraphs';
import GraphShowComponent from '../Components/GraphShowComponent'
import Description from '../Components/Description'

class GraphContainer extends Component {

  state = {
    CurrentGraphType: "Line"
  }

  clickhandler = (event) => {
    this.setState({
      CurrentGraphType: event.target.innerHTML
    })
  }

  render() {
    return (
      <div>
        <div>
        <TypesOfGraphs clickhandler = {this.clickhandler}/>
        <GraphShowComponent champObj = {this.props.champObj} chartdata = {this.props.chartdata} CurrentGraphType = {this.state.CurrentGraphType} levelUp = {this.props.levelUp}/>
        <Description champObj = {this.props.champObj}/>
        </div>
      </div>
    );
  }

}

export default GraphContainer;
