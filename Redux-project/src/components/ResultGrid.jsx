import { useDispatch, useSelector } from 'react-redux';
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import { setQuery,SetLoading,setError,setResults } from '../redux/features/searchSlice' ;



const ResultGrid = () => {

 const {query,activeTab, results, loading,error} = useSelector((store)=> store.search)




 
  return (
    <div>

    </div>
  )
}

export default ResultGrid