import {createContext} from 'react'


const StoreContext = createContext({
    token: null,
    url: "https://finance.josafat.duckdns.org",
    setToken: () => {},
});

export default StoreContext;