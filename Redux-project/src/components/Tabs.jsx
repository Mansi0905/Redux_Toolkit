import React from 'react'
import { useDispatch } from 'react-redux'

const Tabs = () => {
const dispatch=  useDispatch()

    const tabs=['photos', 'gifs', 'videos']
  return (
    <div className='flex gap-10 p-10'>
        {tabs.map(function(elem,idx){
          return (
           <button
           className='bg-gray-700 cursor-pointer active : scale-95 px-5 py-2 rounded uppercase'
            key={idx}
            onClick={()=>{
              dispatch(setActiveTabs(elem))
            }}
            >
              {elem}
              </button>
          )
        })}

    </div>
  )
}

export default Tabs