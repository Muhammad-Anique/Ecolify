import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: 0,
}


//reducer
export const cartClick = createSlice({
  name: 'cartClick',
  initialState,
  reducers: {
    setcartClick: (state,action) => {
        state.data = action.payload
      },

  },
})


// Action creators are generated for each case reducer function
export const { setcartClick } = cartClick.actions

export default cartClick.reducer