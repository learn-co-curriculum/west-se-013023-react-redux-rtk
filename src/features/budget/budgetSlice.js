import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: 100 }

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addTen(state) {
            state.value += 10
        }
    }
})

export const { addTen } = budgetSlice.actions
export default budgetSlice.reducer