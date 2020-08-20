import {createContext} from 'react'


const StoreContext = createContext({
    token: null,
    baseUrl: "https://finance.josafat.duckdns.org/",
    setToken: () => {}
});

export default StoreContext;