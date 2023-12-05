import React, { useContext } from 'react'
import { MyContext } from '../App'
const BComponent = () => {
        const PropsObj = useContext(MyContext)
  return (
   <div className='container border border-info p-3 '>
        <h4>
            <h4>BComponent</h4>
            <h3>{PropsObj.count2}</h3>
            <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setcount2(prev=>prev-1)}>-</button>
            <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setcount2(prev=>prev+1)}>+</button>
        </h4>
    </div>
  )
}

export default BComponent