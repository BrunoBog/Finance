import React, { useState, useContext } from 'react';
import StoreContext from '../Store/Context'
import { useHistory } from 'react-router-dom'
import CurrencyInput from '../inputs/MoneyInput'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Configs from '../../utils/RequestConfig'
import 'react-day-picker/lib/style.css';

import './SpendForm.scss';

function initialState() {
    return { name: ``, description: ``, date: new Date(), moneyValue: '', categoryId: ``, messageWrong: '' }
}

const SpendForm = () => {
    const { token } = useContext(StoreContext);
    const [values, setValues] = useState(initialState)
    const history = useHistory()
    const { setToken } = useContext(StoreContext)

    function verifyValue(value) {
        value = value.replace(',', '.')
        value = parseFloat(value)
        return value
    }

    function onChange(event) {
        const { value, name } = event.target
        setValues({ ...values, [name]: value, })
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

    async function addSpend({ name, description, moneyValue, date }) {
        let floatValue = verifyValue(moneyValue)
        let response = await fetch(`${Configs.baseUrl}/v1/Spends`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: name, description: description, value: floatValue, date: date }),
        })
        if (response.status === 401) {
            setToken({ token: '' })
            history.push('/login')
        }
        if (!response.ok) { return false }

        return true
    }

    async function onSubmit(event) {
        event.preventDefault()

        if (!await addSpend(values)){
            setValues( { errorMessage: "Fail to add Spend" } )
            return
        }

        notify("Saved!")
        setValues(initialState)
    }

    function notify(message) {
        toast.success(`🦄 ${message}`, {position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,})
    }

    return (
        <div className="addSpends">

            <header>
                <span>New spend</span>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </header>
            <main>
                <form className="addSpend" autoComplete="nope" onSubmit={onSubmit}>
                    {/* Datepicker */}
                    <div className="form-group">
                        <DayPickerInput onDayChange={onDateChange} name="date" id="date" value={values.date} />
                    </div>
                    {/* Nake Spend */}
                    <div className="form-group">
                        <input type="texx" name="name" id="name" placeholder="Name" onChange={onChange} value={values.name} />
                    </div>
                    {/* Descriprion */}
                    <div className="form-group">
                        <input type="text" name="description" id="description" placeholder="Description" onChange={onChange} value={values.description} />
                    </div>
                    {/* moneyValue */}
                    <div className="form-group">
                        <CurrencyInput placeholder="R$ 0.00" type="text" onChange={onChange} name="moneyValue" id="moneyValue" value={values.moneyValue} />
                    </div>
                    <span className='ErrorMesssage'>{values.messageWrong}</span>
                    <footer className="footer">
                        <button className="btn-inside" type="submit" id="submit" onSubmit={onSubmit} >Send</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default SpendForm