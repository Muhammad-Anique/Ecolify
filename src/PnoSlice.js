import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: 0,
}


//reducer
export const PnoSlice = createSlice({
  name: 'Pno',
  initialState,
  reducers: {
    setPno: (state, action) => {
      state.data = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { setPno } = PnoSlice.actions

export default PnoSlice.reducer