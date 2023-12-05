import React from 'react'
import AComponent from './AComponent'
import BComponent from './BComponent'

const FirstComponent = () => {
    return (
        <div className="container">
            <h1>FirstComponent</h1>
            <hr />
            <div className="col-6 border border-info ">
                <AComponent />

                <BComponent />
            </div>
        </div>


    )
}

export default FirstComponent