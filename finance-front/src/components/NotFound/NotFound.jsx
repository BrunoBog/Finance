import React from 'react'
import notFound from '../../img/not-found.svg'
import './NotFound.scss'
const NotFound = () => {
        return (
            <div className="notfoundCard">
               <img className="notFoundImage" src={notFound} alt="NotFound"/>
                 Spends
            </div>
        )
}

export default NotFound