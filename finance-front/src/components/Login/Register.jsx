import React, { useState, useContext } from 'react';
import StoreContext from '../../components/Store/Context'
import { useHistory } from 'react-router-dom'
import cifrao from "../../img/cifrao.svg";
import Configs from '../../utils/RequestConfig'
import Loading from '../Loading/Loading'

import './Login.scss';

function initialState() {
    return { user: '', password: '', email: '', errorMessage: '', loading: false }
}


const Register = () => {
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

    async function register({ user, password, email }) {
        let response = await fetch(`${Configs.baseUrl}/v1/User/signUp`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Email: email, Password: password, UserName: user }),
        })

        if (response.status === 409) {
            setValues({ errorMessage: "Email already Exists", loading: false })
        }
        
        if (!response.ok) {
            setValues(initialState)
            setValues({ errorMessage: "Register Fail", loading: false })
        }

        let { token } = await response.json()
        if (token) {
            setToken(token)
            setValues({ loading: false })
            history.push('/')
        }


        let data = await response.json()
        return data
    }

    async function onSubmit(event) {
        event.preventDefault()
        register(values)
    }

    function Errormessage() {
        return (<article className="errorMessage"><label>{values.errorMessage}</label></article>)
    }

    return (
        <div className="base-container">
            <header className="header">
                Register
            </header>
            <form autoComplete="nope" onSubmit={onSubmit}>
                <div className="content">
                    <div className="image">
                        <img src={cifrao} alt="cifrão" />
                    </div>
                    <Errormessage />
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username"> Username</label>
                            <input type="text" name="user" id="user" placeholder="Username" onChange={onChange} value={values.user} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email</label>
                            <input type="text" name="email" id="email" placeholder="Email" onChange={onChange} value={values.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={values.password} />
                        </div>
                    </div>
                </div>
                {values.loading ? <Loading color="#6EF9F5" /> :
                    <footer className="footer">
                        <button className="btn" type="submit" onSubmit={onSubmit}>Register</button>
                    </footer>
                }
            </form>
        </div>
    )
};

export default Register;

