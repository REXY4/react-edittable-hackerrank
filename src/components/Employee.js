import React, { useState,Fragment } from 'react'

const Employee = ({employee,idx, handleSalary}) => {
  const [activeInputSalary, setInputSalary ] = useState(false); 
  const [salary, setSalary] = useState(0)
  const handleActiveInputSalary = () =>{
    if(activeInputSalary){
        setInputSalary(false)
    }else{
        setInputSalary(true)
    }
  }

  console.log(salary)
  return (
    <Fragment>
      <td>{employee.name}</td>
      <td className='pl-20'>{employee.position}</td>
      <td className='pl-20'>
      <div
        onClick={()=>handleActiveInputSalary()}
        hidden={activeInputSalary}
        data-testid={'employee-salary-div-' + idx}
      >
        {employee.salary}
      </div>
      <input
          onChange={(e)=>setSalary(e.target.value)}
          hidden={!activeInputSalary && true }
          placeholder="Enter Salary"
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
      /> 
      </td>
      <td className='pl-20'>
        <button
            onClick={()=>{
                if(activeInputSalary){
                     handleSalary(salary, employee.id)
                    handleActiveInputSalary()
                }
            }}
          className={ 'x-small w-75 ma-0 px-25' }
          data-testid={ 'employee-save-button-' + idx }
        >
          Save
        </button>
      </td>
    </Fragment>
  )
}


export default Employee
