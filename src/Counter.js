import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount} from './counterSlice'
import { useState } from 'react'

export function Counter() {

  const [val, setval] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>


        <span>{count}</span>


        <button
          aria-label="Decrement value"
          onClick={() => {dispatch(decrement())}}
        >
          Decrement
        </button>


        <input value={val} onChange={(event)=>{setval(event.target.value)}}/>


        <button
          aria-label="add amount"
          onClick={() =>{ dispatch(incrementByAmount(Number(val))); console.log((val))}}
        >
          amountclick
        </button>


      </div>
    </div>
  )
}