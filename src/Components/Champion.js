import React, { Component } from 'react';

class Champion extends Component {

  // <ul>
  //   <li onClick = {() => this.props.selectChamp(this.props.champObj)}>{this.props.champObj.name}</li>
  // </ul>

  render() {
    return (
      <div onClick = {() => this.props.selectChamp(this.props.champObj)} >
      <img src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.champObj.image}`}/>
      <p>{this.props.champObj.name}</p>
      </div>
    );
  }

}

export default Champion;
