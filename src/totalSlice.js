import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: 0,
}


//reducer
export const totalSlice = createSlice({
  name: 'Total',
  initialState,
  reducers: {
    setTotal: (state,action) => {
        state.data += action.payload
      },

  },
})


// Action creators are generated for each case reducer function
export const { setTotal} = totalSlice.actions

export default totalSlice.reducer