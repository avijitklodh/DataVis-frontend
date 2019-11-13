import React, { Component } from 'react';
import Form from '../Components/Form';
import Graph from '../Components/Graph'
import TypesOfGraphs from '../Components/TypesOfGraphs'
// import './App.css';

class CustomGraphContainer extends Component {

  state = {
        chartdata: {
          labels: [],
          datasets: [{
            label: "",
            data: []
          }]
      }
  }

passdataup = (data) => {
  let dataNameArray = data.datas.map(obj => Object.values(obj)).map(obj => obj[0])
  let dataValueArray = data.datas.map(obj => Object.values(obj)).map(obj => obj[1])
  console.log(dataValueArray)
  this.setState({
    chartdata: {
      labels: dataNameArray ,
      datasets: [{
        label: data.label,
        data: dataValueArray
      }]
  }
  })
}

  render(){
  return (
    <>
    <div>
    <TypesOfGraphs clickhandler = {this.props.clickhandler}/>
    </div>
    <div>
    < Graph chartdata = {this.state.chartdata} CurrentGraphType = {this.props.CurrentGraphType}/>
    </div>
    <div className="Filter">
    < Form passdataup = {this.passdataup}/>
    </div>
    </>
  );
  }
}
export default CustomGraphContainer;
