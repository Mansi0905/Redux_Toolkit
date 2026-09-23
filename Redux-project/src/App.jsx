import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'


const App = () => {

  
  
  return (
    <div className='h-screen w-full flex flex-col items-start  gap-4 text-white bg-gray-900'>
      <button className='bg-green-400 px-4 py-2 m-5 ' onClick={async()=>{
       const data= await fetchPhotos('cat')

       console.log(data.results);
       
      }}>GET PHOTOS</button>

      <button className='bg-green-400  px-4 py-2 m-5 ' onClick={async()=>{
       const data= await fetchVideos('cat')

       console.log(data.videos);
       
      }}>GET VIDEOS</button>
      
    </div>
  )
}

export default App
