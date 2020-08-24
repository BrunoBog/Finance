import React, { useState, useContext, useEffect } from 'react';
import StoreContext from '../Store/Context'
import { useHistory } from 'react-router-dom'

import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spends from './Spends'

import Configs from '../../utils/RequestConfig'

 import './WeekSpend.scss';

function initialState() {
    return { weeks: [], monthTotal: 0, messageWrong: '' }
}

const SpendForm = () => {
    const { token } = useContext(StoreContext);
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()

    useEffect(() =>{
        const fetchData = async () => { await getValues()}
        fetchData();
    })

    async function getValues() {
        let response = await fetch(`${Configs.baseUrl}/v1/Spends/weeksummary`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        if (response.status === 401) {
            setToken({ token: '' })
            history.push('/login')
        }

        if (!response.ok) {
            setValues({...values, messageWrong: response.text })
            notify("falha ao buscar os dados")
            return 
        }

        let data = await response.json()

        setValues({
            ...values,
            weeks : data.summary,
            monthTotal : data.monthTotal,
        })

    }

    function notify(message) {
        toast.success(`🦄 ${message}`, { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, })
    }

    return (
        <div className="weekPanel">
            <header>
                <span className="title">Week spend</span>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </header>
            <main className="container">
                {values.weeks.map( w => 
                    <Spends total={w.total} weekNumber={w.weekNumber}/>
                )}
                    
            </main>
        </div>
    )
}

export default SpendForm