import React, { Component } from 'react'
import './recordj.css'

class Record extends Component {
    constructor(props){
        super(props);
        this.data = props.dataList;
    }

  render() {
    return (
      <div align="center">
        <h1>Data</h1>
        <div className='container'>
            <div className='card-box'>
            {
                this.data.map((val) => {
                    return(
                            <div className='card'>
                              <h2>{val.name}</h2>
                              <p>Id: {val.grid}</p>
                              <p>Email: {val.email}</p>
                              <p>Password: {val.password}</p>
                              <p>course: {val.course}</p>
                              <p>City: {val.city}</p>
                            </div>
                    )
                })
            }
            </div>
            </div>
      </div>
    )
  }
}

export default Record
