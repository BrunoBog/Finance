import React, { useState } from 'react'
import './Spends.scss'


const Spends = (prop) => {
    const [values] = useState(prop)

    return (
        <div className="spend-content">
            <header>
                <span className='spendTitle'>{values.name}: </span>
                <span className="dateSpend">{new Date(values.date).toLocaleDateString()}</span>
            </header>

            <span>
                R$: {values.value}
            </span>

        </div>
    )
}

export default Spends