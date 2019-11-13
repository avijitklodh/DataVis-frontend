import React, { Component } from 'react';

class Dataset extends Component {

  renderedText = () => {
    return this.props.sample ? "Create your own data" : "Check out League of Legend data"
  }

  render() {
    return (
      <div>
        <button onClick = {this.props.changeRender}>{this.renderedText()}</button>
      </div>
    );
  }

}

export default Dataset;
