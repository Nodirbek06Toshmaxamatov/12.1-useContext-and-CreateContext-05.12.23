import React, { useContext } from 'react'
import { MyContext } from '../App'

const AComponent = () => {
    const PropsObj = useContext(MyContext)
  return (
    <div className='container border border-info p-3'>
        <h4>
            <h4>AComponent</h4>
            <h3>{PropsObj.count1}</h3>
            <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setcount1(prev=>prev-1)}>-</button>
            <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setcount1(prev=>prev+1)}>+</button>
        </h4>
    </div>
  )
}

export default AComponent