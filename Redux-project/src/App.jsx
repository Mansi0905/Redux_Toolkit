import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'


const App = () => {

  
  
  return (
    <div className='h-screen w-full   gap-4 text-white bg-gray-900'>
     
      <SearchBar/>

      <Tabs/>

      <ResultGrid/>
    </div>
  )
}

export default App
