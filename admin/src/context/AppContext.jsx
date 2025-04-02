import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken') : '');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        try {
            const {data} = await axios.get(backendUrl+'/api/common/get-items')
            
            if(data.success){
                setItems(data.Items);
            } else{
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! Please try again.");
        }
    }

    const value = {
        backendUrl,
        aToken, setAToken,
        items, getAllItems
    }

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider;