import React, { useContext } from 'react';
import StoreContext from '../../components/Store/Context'
import { useHistory } from 'react-router-dom'

const PagesHome = () => {
  const { setToken } = useContext(StoreContext)
  const history = useHistory()

  function logout(){
    setToken({token: ''})
    history.push('/login')
  }
  
  return (
    <div className="pages-home">
      Logou !
      <button type="button" onClick={logout}>Sair</button>
    </div>
  )
};

export default PagesHome;
