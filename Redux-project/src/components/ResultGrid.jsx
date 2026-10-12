import { useDispatch, useSelector } from 'react-redux';
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import { setQuery,SetLoading,setError,setResults } from '../redux/features/searchSlice' ;
import { useEffect } from 'react';



const ResultGrid = () => {

 const {query,activeTab, results, loading,error} = useSelector((store)=> store.search)

useEffect(function(){

},[])

 
  return (
    <div>

    </div>
  )
}

export default ResultGrid