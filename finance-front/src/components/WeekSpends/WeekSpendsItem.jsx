import React, { useState } from 'react';

import paybag from "../../img/cash-payment-bag-1.svg";
import './WeekSpendsItem.scss'

const WeekSpendsItem = (props) => {
    const [values] = useState(props)
    
    return (
        <div className="weekdata">
            <div className="spendImg">
                <img src={paybag} alt="cifrão" /></div>
            <div className="spend">
                <div className="titleSpend">Week: {values.weekNumber}</div>
                <div className="value">{values.total}</div>
            </div>
        </div>
    )

}

export default WeekSpendsItem