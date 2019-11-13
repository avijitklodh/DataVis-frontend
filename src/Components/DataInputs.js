import React from "react"
const DataInputs = (props) => {
  return (
    props.datas.map((val, idx)=> {
      let dataId = `data-${idx}`, yaxisId = `yaxis-${idx}`
      return (
        <div key={idx}>
          <label htmlFor={dataId}>{`Data #${idx + 1}`}</label>
          <input
            type="text"
            name={dataId}
            data-id={idx}
            id={dataId}
            value={props.datas[idx].xaxis}
            className="xaxis"
          />
              <br/>
          <label htmlFor={yaxisId}>Value  </label>
          <input
            type="number"
            name={yaxisId}
            data-id={idx}
            id={yaxisId}
            value={props.datas[idx].yaxis}
            className="yaxis"
          />
              <br/>
        </div>
      )
    })
  )
}
export default DataInputs
