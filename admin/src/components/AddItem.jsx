import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddItem = () => {

    const [image, setImage] = useState('');
    const [name, setName]   = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc]   = useState('');

    const {backendUrl, aToken} = useContext(AppContext);

    const addItemHandeler = async (event) => {
        event.preventDefault();
        try {
            const formdata = new FormData;
            formdata.append('image', image);
            formdata.append('name', name);
            formdata.append('price', price);
            formdata.append('desc', desc);

            const {data} = await axios.post(backendUrl+'/api/admin/add-item', formdata, {headers:aToken});

            if(data.success){
                toast.success(data.message);
                setImage('');
                setName('');
                setDesc('');
                setPrice('');
            } else{
                toast.error(error.message); 
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! Please try again.");
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default AddItem
