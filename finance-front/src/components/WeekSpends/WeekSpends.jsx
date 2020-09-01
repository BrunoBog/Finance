import React, { useState, useContext, useEffect } from 'react';
import StoreContext from '../Store/Context'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading/Loading'
import RefreshButton from '../RefreshButton/RefreshButton'
import NotFound from '../NotFound/NotFound'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WeekSpendsItem from './WeekSpendsItem'

import Configs from '../../utils/RequestConfig'

import './WeekSpend.scss';

function initialState() {
    return { weeks: [], monthTotal: 0, messageWrong: '', loading: true, refresh: true }
}

const SpendForm = () => {
    const { token } = useContext(StoreContext);
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        const fetchData = async () => { await getValues() }
        fetchData();
        //TODO Debit to resolve later
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.refresh])

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
            setValues({ ...values, messageWrong: response.text, loading: true })
            notify("falha ao buscar os dados")
            return
        }

        let data = await response.json()

        setValues({
            ...values,
            weeks: data.summary,
            monthTotal: data.monthTotal,
            loading: false
        })
    }
    function notify(message) {
        toast.success(`🩹 ${message}`, { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, })
    }
    function refreshValues(){
        setValues({loading: true, refresh: !values.refresh})
    }
    return (
        <div className="weekPanel">
            <header>
                <span className="title">Month spends</span>
                <span onClick={refreshValues}><RefreshButton/></span>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </header>
            <main className="container">
                {values.loading
                    ? <Loading color="#6EF9F5" />
                    : values.monthTotal > 0 
                        ? values.weeks.map(w => <WeekSpendsItem total={w.total} weekNumber={w.weekNumber} key={w.weekNumber} />)
                        : < NotFound />
                }
            </main>
        </div>
    )
}

export default SpendForm