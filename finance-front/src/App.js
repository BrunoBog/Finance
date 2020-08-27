import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Home from './Pages/Home/Home.jsx'
import LoginPage from './Pages/Login/LoginPage.jsx'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;
