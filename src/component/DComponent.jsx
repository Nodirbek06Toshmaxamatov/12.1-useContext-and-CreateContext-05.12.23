import React, { useContext } from 'react'
import { MyContext } from '../App'
const DComponent = () => {
    const PropsObj = useContext(MyContext)
  return (
    <div className='container border border-info p-3 '>
    <h4>
        <h4>DComponent</h4>
        <h3>{PropsObj.count4}</h3>
        <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setcount4(prev=>prev-1)}>-</button>
        <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setcount4(prev=>prev+1)}>+</button>
    </h4>
</div>
  )
}

export default DComponent