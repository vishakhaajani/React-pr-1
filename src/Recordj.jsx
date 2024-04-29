import React from 'react'
import './recordj.css'

const Recordj = ({employee}) => {
  return (
    <div align="center">
      <h1>Employee Data</h1>
            <div className='container'>
            <div className='card-box'>
            {
                employee.map((val) => {
                    return(
                            <div className='card'>
                              <h2>{val.empname}</h2>
                              <p>Id: {val.empid}</p>
                              <p>Email: {val.empemail}</p>
                              <p>Phone: {val.empphone}</p>
                              <p>Address: {val.empaddress.country} {val.empaddress.state} {val.empaddress.city} {val.empaddress.area}</p>
                              <p>Degignation: {val.empdeg}</p>
                              <p>Salary: {val.empsalary}</p>
                              <p>Department: {val.empdepartment}</p>
                            </div>
                    )
                })
            }
            </div>
            </div>
    </div>
  )
}

export default Recordj
