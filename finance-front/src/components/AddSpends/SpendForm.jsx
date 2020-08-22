import React, { useState, useContext } from 'react';
import StoreContext from '../Store/Context'
import { useHistory } from 'react-router-dom'
import CurrencyInput from '../inputs/MoneyInput'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import './SpendForm.scss';

function initialState() {
    return {  name: ``, description: ``, date: new Date(), moneyValue: '', categoryId: ``, messageWrong: '' }
}

const SpendForm = () => {
    const { token } = useContext(StoreContext);
    const [values, setValues] = useState(initialState)
    const history = useHistory()
    const { setToken } = useContext(StoreContext)

    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    const onDateChange = (date) => {
        let n = Date.parse(date)
        if (n) {
            setValues({
                ...values,
                date: date,
                messageWrong: ''
            })
        } else {
            setValues({
                ...values,
                date: date,
                messageWrong: 'Invalid Date'
            })
        }


    }

    async function onSubmit() {
        debugger
        let response = await fetch('http://localhost:8080/v1/Spends', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: values.name, description: values.description, value: values.moneyValue, date: values.date }),
        })
        debugger
        if (response.status === 401) {
            setToken(token)
            history.push('/login')
        }
        if (!response.ok) { return { token: null } }

        let data = await response.json()
        console.log(data)
    }

    return (
        <div className="addSpends">

            <header>
                <span>New spend</span>
            </header>
            <main>
                <form className="addSpend" autoComplete="nope" onSubmit={onSubmit}>
                    {/* Nake Spend */}
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Name" onChange={onChange} value={values.name} />
                    </div>
                    {/* Descriprion */}
                    <div className="form-group">
                        <input type="text" name="description" id="description" placeholder="Description" onChange={onChange} value={values.description} />
                    </div>
                    {/* moneyValue */}
                    <div className="form-group">
                        <CurrencyInput placeholder="R$ 0.00" type="text" onChange={onChange} name="moneyValue" id="moneyValue" value={values.moneyValue} />
                    </div>
                    {/* Datepicker */}
                    <div className="form-group">
                        {/* <DatePickerInput onChange={onDateChange} value={values.date} /> */}
                        <DayPickerInput onDayChange={onDateChange} name="date" id="date" value={values.date} />

                    </div>
                    <span className='ErrorMesssage'>{values.messageWrong}</span>
                    <footer className="footer">
                    {/* <button className="btn" type="submit" onSubmit={onSubmit} >Login</button> */}
                        <button className="btn-inside" type="submit" onSubmit={onSubmit} locale='BRL' >Send</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default SpendForm