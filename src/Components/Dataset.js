import React, { Component } from 'react';

class Dataset extends Component {

  renderedText = () => {
    return this.props.sample ? "Create your own data" : "League of Legend data"
  }

  render() {
    return (
      <div>
        <button className = "switchButton" onClick = {this.props.changeRender}>{this.renderedText()}</button>
      </div>
    );
  }

}

export default Dataset;
