import React from 'react'
import DComponent from './DComponent'
import CComponent from './CComponent'

const SecondComponent = () => {
  return (
    <div className="container ">
            <h1>SecondComponent</h1>
            <hr />
            <div className="col-6 border border-info ">
                <CComponent />
                <DComponent />
            </div>
        </div>
  )
}

export default SecondComponent