import React, { useContext } from 'react';
import StoreContext from '../../components/Store/Context'
import { useHistory } from 'react-router-dom'
import SpendForm from '../../components/AddSpends/SpendForm'

import './home.scss'

const PagesHome = () => {
  const { setToken } = useContext(StoreContext)
  const history = useHistory()

  function logout() {
    setToken({ token: '' })
    history.push('/login')
  }

  return (
    <div className="app">
    <div className="pages-home">

      <div className="home-container">

        <header className="header-home">
          Olha  que cabeçalho bunito
          <div className="logout">
            <span htmlFor="">Sair do Bufunfas $$ </span>
            <button type="button" onClick={logout}>Sair</button>
          </div>

          {/* <nav className="navegation">
            Aqui vai os link jhow
          </nav> */}
        </header>

        <div className="hero">
          <span>Chegou na Home em danado ? </span>
        </div>



        <main className="main-content">
          <div className="right-content">
            <article className="newEntry">
              <SpendForm />
            </article>
          </div>

          <div className="content">
            <article className="summary">
              aqui os resumos dos gastos da semana
            </article>

            <article className="summary">
              aqui a soma do gasto no mês
            </article>
          </div>

        </main>

        <footer>

        </footer>

      </div>

      {/* <br/> <br/><br/> */}

    </div>
    </div>
  )
};

export default PagesHome;
