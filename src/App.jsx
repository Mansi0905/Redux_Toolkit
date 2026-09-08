import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { decrement, incrememntByAmount, increment } from './redux/feature/counterSlice'

const App = () => {

const dispatch = useDispatch()
const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{
         dispatch(increment())
      }}>
        Increment
        </button>

      <button onClick={()=>{
         dispatch(decrement())
      }}>
        Decrement
      </button>

      <input type="number"/>

      <button onClick={()=>{
        dispatch(incrememntByAmount(10))
      }}>
        Increase by Amount
        </button>
    </div>
  )
}

export default App