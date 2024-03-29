import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTen, subtractAmount } from '../features/budget/budgetSlice'

export default function Budget() {

  const budget = useSelector(state => state.budget.value)
  console.log("🚀 ~ file: Budget.jsx:7 ~ Budget ~ budget:", budget)

  const dispatch = useDispatch()

  function handleAddTen() {
    dispatch(addTen())
  }

  function handleSubtract(){
    dispatch(subtractAmount(5))
  }


  return (
    <div>
        <h2>Redux Shelter Budget:</h2>
        <h3>${budget}</h3>
        <div>
            <button className="ui button" onClick={handleAddTen}>Add $10</button>
            <button className="ui button" onClick={handleSubtract}>Subtract $5</button>
        </div>
    </div>
  )
}
