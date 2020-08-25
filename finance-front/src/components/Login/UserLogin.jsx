import React, { useState, useContext } from 'react';
import StoreContext from '../../components/Store/Context'
import { useHistory } from 'react-router-dom'
import cifrao from "../../img/cifrao.svg";
import Configs from '../../utils/RequestConfig'
import Loading from '../Loading/Loading'

import './Login.scss';

function initialState() {
    return { user: '', password: '', errorMessage: '', loading: false }
}

const UserLogin = () => {
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()

    function onChange(event) {
        const { value, name } = event.target
        setValues({

            ...values,
            [name]: value,
        })
    }

    function Errormessage() {
        return (<article className="errorMessage"><label>{values.errorMessage}</label></article>)
    }

    async function login({ user, password }) {

        //TODO change in prod
        // let response = await fetch('https://finance.josafat.duckdns.org/v1/User/login', {
        //     // mode: 'no-cors',
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ Email: user, Password: password }),
        // })


        let response = await fetch(`${Configs.baseUrl}/v1/User/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Email: user, Password: password }),
        })

        if (!response.ok) {

            setValues(initialState)
            setValues({ errorMessage: "Login Fail", loading: false })
        }

        let { token } = await response.json()
        if (token) {
            setToken(token)
            setValues({ loading: false })
            history.push('/')
        }
    }

    async function onSubmit(event) {
        setValues({ loading: true })
        event.preventDefault()
        login(values)
    }

    return (
        <div className="base-container" >
            <header>
                <div className="header">Login</div>
            </header>
            <form autoComplete="nope" onSubmit={onSubmit}>
                <div className="content">

                    :<div className="image">
                        <img src={cifrao} alt="cifrão" />
                    </div>

                    <Errormessage />
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username"> Username</label>
                            <input type="text" name="user" id="user" placeholder="Username" onChange={onChange} value={values.user} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={values.password} />
                        </div>
                    </div>
                    {values.loading ? <Loading color="#6EF9F5" /> :
                    <footer className="footer">
                        <button className="btn" type="submit" onSubmit={onSubmit} disabled={values.loading} >Login</button>
                    </footer>
                    }
                </div>

            </form>
        </div>
    );
};

export default UserLogin;
