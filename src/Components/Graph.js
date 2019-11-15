import React, { Component } from 'react';
import { Bar, Line, Pie, Radar, Polar, Doughnut } from 'react-chartjs-2';

class Graph extends Component {
  whatRenders = () => {
    // console.log(this.props.CurrentGraphType)
  let  graphType = this.props.CurrentGraphType
      switch(graphType){
        case "Line":
      return (<Line
     data={this.props.chartdata}
     width={50}
     height={50}
     options={{ maintainAspectRatio: false }}
    />)
      case "Bar":
    return(<Bar
     data={this.props.chartdata}
     width={50}
     height={50}
     options={{ maintainAspectRatio: false }}
    />)
      case "Pie":
    return (<Pie
     data={this.props.chartdata}
     width={50}
     height={50}
     options={{ maintainAspectRatio: false }}
    />)
      case "Radar":
      return(
    <Radar
     data={this.props.chartdata}
     width={50}
     height={50}
     options={{ maintainAspectRatio: false }}
    />)
    case "Doughnut":
    return(
    <Doughnut
     data={this.props.chartdata}
     width={50}
     height={50}
     options={{ maintainAspectRatio: false }}
    />)
    case "Polar":
    return(
    <Polar
     data={this.props.chartdata}
     width={50}
     height={50}
     options={{ maintainAspectRatio: false }}
    />)
    break;
    default:
    return(
    <Line
   data={this.props.chartdata}
   width={50}
   height={50}
   options={{ maintainAspectRatio: false }}
   />);
  }
  }

  render() {
    return (
      <div className = "custGraph">
      <h2>{this.props.title}</h2>
          {this.whatRenders()}
      </div>
    );
  }

}

export default Graph;
