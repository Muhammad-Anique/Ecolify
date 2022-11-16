import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: [],
}


//reducer
export const cartSlice = createSlice({
  name: 'cartlist',
  initialState,
  reducers: {
    setcartlist: (state, action) => {
      state.data = ([...state.data, action.payload]);
    },
  },
})


// Action creators are generated for each case reducer function
export const { setcartlist ,setTotal} = cartSlice.actions

export default cartSlice.reducer