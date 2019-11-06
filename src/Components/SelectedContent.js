import React, { Component } from 'react';

class SelectedContent extends Component {

  whichImageToRender = () => {
    // console.log(this.props.champObj)
    if (this.props.champObj.image_art !== undefined){
      return (<img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.props.champObj.name}_0.jpg`}/>)
    }
  //   else{ return "No image to render"}
  }

  render() {
    return (
      <div>
        {this.whichImageToRender()}
      </div>
    );
  }

}

export default SelectedContent;
