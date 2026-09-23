import React from 'react'
import { fetchPhotos } from './api/mediaApi'


const App = () => {

  
  
  return (
    <div className='h-screen w-full text-white bg-gray-900'>
      <button onClick={()=>{
        fetchPhotos('cat')
      }}>GET PHOTOS</button>
      
    </div>
  )
}

export default App
