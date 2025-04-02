import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Menu = () => {

  const {items, getAllItems, aToken} = useContext(AppContext);

  useEffect(() => {
    if(aToken) getAllItems();
  }, [aToken]);

  return items && (
    <div className='m-5 w-full'>
      <p className='text-xl font-semibold'>All Items</p>

      <div className='grid grid-cols-5'>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.desc}</p>
            <div>
              <button>Remove</button>
              {item.available?<button>Un-available</button> : <button>available</button>}
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Menu
