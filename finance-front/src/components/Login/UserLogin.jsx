import React, { useState, useContext } from 'react';
import StoreContext from '../../components/Store/Context'
import { useHistory } from 'react-router-dom'
import cifrao from "../../img/cifrao.svg";

import './Login.scss';

function initialState() {
    return { user: '', password: '' }
}

const UserLogin = (props) => {
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()
    // const [propState] = useContext(props) // this.props.containerRef

    function onChange(event) {
        const { value, name } = event.target
        setValues({

            ...values,
            [name]: value,
        })
    }

    function login({ user, password }) {
        if (user === 'admin' && password === 'admin')  return { token: '123' }
        return { token: null }
    }

    function onSubmit(event) {
        event.preventDefault()
        debugger
        const { token } = login(values)

        if (token) {
            setToken(token)
            history.push('/')
        }

        setValues(initialState)
    }

    return (
        <div className="base-container" >
            <header>
                <div className="header">Login</div>
            </header>
            <form autoComplete="nope" onSubmit={onSubmit}>
            <div className="content">
                <div className="image">
                    <img src={cifrao} alt="cifrão" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username</label>
                        <input type="text" name="user" id="user" placeholder="Username" onChange={onChange}  value={values.user}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={values.password}/>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <button className="btn" type="submit" onClick={onSubmit} >Login</button>
            </footer>
            </form>
        </div>
    );
};

export default UserLogin;
