import React, { Component } from 'react';

class Champion extends Component {

  render() {
    return (
      <div className = "item" onClick = {() => this.props.applyItem(this.props.itemObj)} >
      <br/>
        <img src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.itemObj.full_image}`}/>
          <p>{this.props.itemObj.name}</p>
      </div>
    );
  }
}

export default Champion;
