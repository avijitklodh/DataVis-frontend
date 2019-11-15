import React from "react"
import DataInputs from "./DataInputs"

class Form extends React.Component {
  state = {
    datas: [{xaxis:"", yaxis:""}],
    label: "",
    title: ""
  }
handleChange = (e) => {
    if (["xaxis", "yaxis"].includes(e.target.className) ) {
      let datas = [...this.state.datas]
      datas[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ datas }, () => console.log(this.state.datas))
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
adddata = (e) => {
    this.setState((prevState) => ({
      datas: [...prevState.datas, {xaxis:"", yaxis:""}],
    }));
  this.props.passdataup(this.state)
  }
handleSubmit = (e) => {
  e.preventDefault()
  this.props.passdataup(this.state)
}
render() {
    let {label, title, datas} = this.state
    return (
      <>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="title">Title </label>
        <input type="text" name="title" id="title" value={title} />
            <br/>
        <label htmlFor="xaxis">label </label>
        <input type="text" name="label" id="label" value={label} />
            <br/>
            <div>
        <button type="button" onClick={this.adddata}>Add new data</button>
            </div>
            <br/>
        <DataInputs datas={datas} />
        <input type="submit" value="Submit" />
      </form>
      </>
    )
  }
}
export default Form
