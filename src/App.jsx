import React, { createContext, useState } from 'react'
import FirstComponent from './component/FirstComponent'
import SecondComponent from './component/SecondComponent'



export var MyContext = createContext()
const App = () => {
  const [count1, setcount1] = useState(0)
  const [count2, setcount2] = useState(0)
  const [count3, setcount3] = useState(0)
  const [count4, setcount4] = useState(0)


  var PLus=()=>{
    setcount1(prev=>prev+1)
    setcount2(prev=>prev+1)
    setcount3(prev=>prev+1)
    setcount4(prev=>prev+1)
  }
  var Minus=()=>{
    setcount1(prev=>prev-1)
    setcount2(prev=>prev-1)
    setcount3(prev=>prev-1)
    setcount4(prev=>prev-1)
  }

  return (
    <MyContext.Provider value={{
      count1, count2, count3, count4,
      setcount1, setcount2, setcount3, setcount4
    }}>
      <div className='container'>
        <div className="row my-2">
          <div className="col-4 offset-5">
            <button className='btn btn-outline-dark px-5 btn-sm' onClick={Minus}>-</button>
            <button className='btn btn-outline-dark px-5 btn-sm mx-1' onClick={PLus}>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col-6 border border-dark p-4">
            <FirstComponent />
          </div>
          <div className="col-6 border border-dark p-4">
            <SecondComponent />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default App