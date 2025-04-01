import { createContext, useState } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken') : '');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        backendUrl,
        aToken, setAToken,

    }

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider;