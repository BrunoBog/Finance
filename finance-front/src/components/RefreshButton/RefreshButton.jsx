import React from 'react'
import RefreshImage from '../../img/refresh.svg'
import './RefreshButton.scss'

const RefreshButton = () =>{

    return (
        <div className="refresh">
            <img src={RefreshImage} alt="Refresh"/>
        </div>
    )
}

export default RefreshButton