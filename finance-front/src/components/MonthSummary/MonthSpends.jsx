import React, { useState, useContext, useEffect, setToken } from 'react'
import Loading from '../Loading/Loading'
import Spends from '../Spends/Spends'
import NotFound from '../NotFound/NotFound'
import StoreContext from '../Store/Context'
import Configs from '../../utils/RequestConfig'
import { useHistory } from 'react-router-dom'
import './MonthSpends.scss'

function initialState() {
    return { spends: [], totalValue: 0, loading: true, searchDate: new Date() }
}
const MonthSpends = () => {
    const [values, setValues] = useState(initialState)
    const { token } = useContext(StoreContext);
    const history = useHistory()


    useEffect(() => {
        const fetchData = async () => { await getValues() }
        fetchData();
        //TODO to resolve later
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getValues() {

        let response = await fetch(`${Configs.baseUrl}/v1/Spends/month?month=${values.searchDate.getMonth() + 1}&year=${values.searchDate.getFullYear()}`, {
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
            setValues({ messageWrong: response.text, loading: true })
            return
        }

        let resp = await response.json()

        console.log(resp.length)
        if (resp.length === 0) setValues({ loading: false })

        debugger
        setValues({
            spends: sortSpends(resp),
            totalValue: resp.map(i => i.value).reduce((accumulator, currentValue) => accumulator + currentValue),
            loading: false
        });

    }

    function sortSpends(items) {
        return items.sort((a, b) => {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
            return 0;
        })
    }

    return (
        <div className="month-content">
            <header>
                Month Summary
            </header>

            <main className="main-content">
                <div className="principal">
                    {
                        values.loading
                            ? <Loading color="#6EF9F5" />
                            : values.totalValue > 0
                                ? values.spends.map(w =>
                                    <Spends
                                        name={w.name}
                                        value={w.value}
                                        date={w.date}
                                        description={w.description}
                                        key={w.id.timestamp}
                                    />)
                                : <NotFound />
                    }
                </div>
            </main>

            <footer>
                {values.totalValue > 0 ? `Total:  ${values.totalValue.toFixed(2)}` : ''}
            </footer>
        </div>
    )
}

export default MonthSpends